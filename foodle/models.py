from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class DealModel(models.Model):
    info = models.CharField(default='', max_length=200)
    picture = models.ImageField(upload_to='deals/', blank=True)
    likes = models.ManyToManyField(User, related_name='likes')
    category = models.CharField(default='', max_length=50)

    def __str__(self):
        return self.title
    
    @property
    def count_likes(self):
       return self.likes.count()



class Category(models.Model):
    name = models.CharField(max_length=32, unique=True)

    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name
