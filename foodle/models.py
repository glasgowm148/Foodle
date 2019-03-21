from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Deal(models.Model):
    info = models.CharField(default='', max_length=200, unique=True)
    picture = models.ImageField(upload_to='deals/', blank=True)
    likes = models.IntegerField(default=0)
    
    class Meta:
        verbose_name_plural = 'deals'

    def __str__(self):
        return self.title
    
    @property
    def add_like(self):
       self.likes += 1



class Category(models.Model):
    name = models.CharField(max_length=32, unique=True)

    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name
