from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .models import BlogPost, DealModel
from . import serializers
from .permissions import ReadOnly
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.forms import UserCreationForm
from .forms import registerForm, SubmitForm, contactForm
from .serializers import DealSerializer
from django.core.mail import send_mail, BadHeaderError
from django.template import RequestContext



def index(request, path=''):
    """
    The home page. This renders the container for the single-page app.
    """
    context_dict = {
        'deals': DealModel.objects.all()
    }

    return render(request, 'index.html', context_dict)

def about(request):
    """
    The about page. This renders the container for the single-page app.
    """
    return render(request, 'about.html')

def faq(request):
    """
    The faq page. This renders the container for the single-page app.
    """
    return render(request, 'faq.html')

def like(request):
    # Like view: updates a like counter based on whether the user has already liked
    deal_id = None
    if request.method == 'GET':
        deal_id = request.GET.get('deal_id')

        if deal_id:
            deal = DealModel.objects.get(id=int(deal_id))
            if deal:
                if deal.been_liked.filter(id=request.user.id).exists():
                    deal.likes -= 1
                    deal.been_liked.remove(request.user)

                else:
                    deal.likes += 1
                    deal.been_liked.add(request.user)

                deal.save()

    return HttpResponse(deal.likes)

def dislike(request):
    # Like view: updates a like counter based on whether the user has already disliked
    deal_id = None
    if request.method == 'GET':
        deal_id = request.GET.get('deal_id')

        if deal_id:
            deal = DealModel.objects.get(id=int(deal_id))
            if deal:
                if deal.been_disliked.filter(id=request.user.id).exists():
                    deal.likes += 1
                    deal.been_disliked.remove(request.user)

                else:
                    deal.likes -= 1
                    deal.been_disliked.add(request.user)

                deal.save()

    return HttpResponse(deal.likes)

def deal_page(request, deal_name_slug):
    """
    The deal page. This renders the details of a given deal on the page
    """
    return render(request, 'deal_page.html', {
        'deal':  DealModel.objects.get(slug=deal_name_slug)
    })

def submit(request):

    if request.method == 'POST':
        submit_form = SubmitForm(data=request.POST)

        if submit_form.is_valid():

            submit = submit_form.save(commit=False)

            if 'picture' in request.FILES:
                submit.picture = request.FILES['picture']
            submit.save()
            return HttpResponseRedirect(reverse('deal_page'))

        else:
            print(submit_form.errors)
    else:
        submit_form = SubmitForm()

    return render(request,'submit.html', {'submit_form': submit_form,})



def contact(request):
    if request.method== 'GET':
      form = contactForm()
    else:
      form = contactForm(request.POST)
      if form.is_valid():
        email_subject = form.cleaned_data['email_subject']
        user_email = form.cleaned_data['user_email']
        user_msg = form.cleaned_data['user_msg']
        try:
          send_mail(email_subject,user_msg,user_email,['FoodleAdmin@protonmail.com'])
        except BadHeaderError:
          return HttpResponse('Invalid header')
        return HttpResponse('Sent!')
    return render(request, "contact.html", {'form': form})

'''' Handle Login and register '''

@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))

def user_login(request):
    # If the user is registered with a correct registerForm
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)

        if user:

            if user.is_active:
                login(request, user)
                return HttpResponseRedirect(reverse('index'))

            else:
                return HttpResponse("Your account is disabled.")

        else:

            print("Invalid login details: {0}, {1}".format(username, password))
            return HttpResponse("Invalid login details supplied.")

    else:
        return render(request, 'login.html', {})

def register(request):

    # Register form for the users. Redirects to login straight after a successful login
    if request.method == 'POST':
        form = registerForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('login')
    else:
        form = registerForm()

    return render_to_response(request, 'register.html', {'form': form})

class UserViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the User model
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (ReadOnly, )

class DealViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the User model
    """
    queryset = DealModel.objects.all()
    serializer_class = serializers.DealSerializer
    permission_classes = (ReadOnly, )


class BlogPostViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the Blog Post model
    """

    queryset = BlogPost.objects.all()
    serializer_class = serializers.BlogPostSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


