from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .models import DealModel, BlogPost
from . import serializers
from .permissions import ReadOnly
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.forms import UserCreationForm
from .forms import registerForm, SubmitForm
from .serializers import DealSerializer

def index(request, path=''):
    """
    The home page. This renders the container for the single-page app.
    """
    return render(request, 'index.html')

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

@login_required
def like(request):
    print("\n"*209)
    deal_id = None
    if request.method == 'GET':
        deal_id = request.GET.get('deal_id')
        likes = 0

    if deal_id:
        deal = DealModel.objects.get(id=int(deal_id))
        if deal:
            print("yes")
            deal.likes += 1
            likes = deal.likes
            deal.save()

    return HttpResponse(likes)

def deal_page(request):
    """
    The about page. This renders the container for the single-page app.
    """
    return render(request, 'deal_page.html', {
        'deals':  DealModel.objects.all()
    })

def submit(request):

    if request.method == 'POST':
        submit_form = SubmitForm(data=request.POST)

        if submit_form.is_valid():

            submit = submit_form.save(commit=False)

            if 'picture' in request.FILES:
                submit.picture = request.FILES['picture']

            submit.save()
            return HttpResponseRedirect(reverse('index'))

        else:
            print(submit_form.errors)
    else:
        submit_form = SubmitForm()

    return render(request,'submit.html', {'submit_form': submit_form,})



def contact(request):
    return render(request, 'contact.html')

# Handle Login and register
@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))

def user_login(request):

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

    return render(request, 'register.html', {'form': form})

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


