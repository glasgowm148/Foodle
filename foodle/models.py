from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class DealModel(models.Model):
    info = models.CharField(default='', max_length=200, unique=True)
    picture = models.ImageField(upload_to='deals/', blank=True)
    been_liked = models.ManyToManyField(User, related_name="liked-by+")
    been_disliked = models.ManyToManyField(User, related_name="disliked-by+")
    likes = models.IntegerField(default=1)
    url = models.URLField(blank=True)
    category = models.CharField(default='', max_length=50)


class Category(models.Model):
    name = models.CharField(max_length=32, unique=True)

    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

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
