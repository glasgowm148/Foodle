from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import DealModel

class SubmitForm(forms.ModelForm):
    class Meta:
        model = DealModel
        # All attributes that users can see in the form
        fields = ('name', 'info', 'picture', 'category', 'url', 'address')

class registerForm(UserCreationForm):
    # Register form
    first_name = forms.CharField(max_length=30, required=False, help_text='Optional')
    last_name = forms.CharField(max_length=30, required=False, help_text='Optional')
    email = forms.EmailField(max_length=254, help_text='Requires a valid email address')

    class Meta:
        model = User
        fields = ( # Form attributes to be sent to the form
            'username', 
            'first_name', 
            'last_name', 
            'email', 
            'password1', 
            'password2', 
        )
#The following code was adapted from https://wsvincent.com/django-contact-form/        
class contactForm(forms.Form):
  user_email = forms.EmailField(required=True)
  email_subject = forms.CharField(required=True)
  user_msg = forms.CharField(widget=forms.Textarea, required=True)
