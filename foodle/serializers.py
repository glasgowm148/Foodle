from django.contrib.auth.models import User
from rest_framework import serializers

from .models import BlogPost
from .models import AboutPage
from .models import Deal


class AboutPageSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = AboutPage
        fields = ('id', 'user', 'date', 'body')

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')

class DealSerializer(serializers.ModelSerializer):

    class Meta:
        model = Deal
        fields = ('name', 'description', 'views', 'likes')

class BlogPostSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = BlogPost
        fields = ('id', 'user', 'date', 'body')
