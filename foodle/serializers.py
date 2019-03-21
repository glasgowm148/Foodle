from django.contrib.auth.models import User
from rest_framework import serializers

from .models import BlogPost
from .models import AboutPage
from .models import SubmitModel


class AboutPageSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = AboutPage
        fields = ('id', 'user', 'date', 'body')

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')

class BlogPostSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = BlogPost
        fields = ('id', 'user', 'date', 'body')

class DealSerializer(serializers.ModelSerializer):
    deal = serializers.StringRelatedField(many=False)
    class Meta:
        model = SubmitModel
        fields = ('info', 'pictures', 'likes', 'category')
