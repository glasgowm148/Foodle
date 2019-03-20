from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class SubmitModel(models.Model):
    info = models.CharField(default='', max_length=200)
    picture = models.ImageField(upload_to='deals/', blank=True)

class AboutPage(models.Model):
    """
    The "AboutPage" model for the foodle  app
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    body = models.CharField(default='', max_length=200)

    def __str__(self):
        return self.body
        
class BlogPost(models.Model):
    """
    The "BlogPost" model for the foodle  app
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    body = models.CharField(default='', max_length=200)

    def __str__(self):
        return self.body

class Deal(models.Model):
    """
    possible model for holding deals in the database (will change)
    """
    name = models.CharField(max_length=128, unique=True)
    description = models.CharField(max_length=300, default='')
    views = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.name