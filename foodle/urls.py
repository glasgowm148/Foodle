from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'posts', views.BlogPostViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'about', views.AboutPageViewSet)


urlpatterns = [
    path(r'api/', include(router.urls)),
    path(r'', views.index, name='index'),
    path(r'^about/', views.about, name='about'),


]