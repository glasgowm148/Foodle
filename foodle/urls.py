from django.urls import path, include
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from . import views

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'posts', views.BlogPostViewSet)
router.register(r'users', views.UserViewSet)


urlpatterns = [

    path(r'api/', include(router.urls)),
    path(r'', views.index, name='index'),
    path(r'^about/$', views.about, name='about'),
    path(r'^deal_page/$', views.deal_page, name='deal_page'),

    # Login and Register
    path(r'^register/$', views.register, name='register'),
    path(r'^login/$', views.user_login, name='login'),
    path(r'^logout/$', views.user_logout, name='logout'),

    # JWT
    path(r'api-token-auth/', obtain_jwt_token),
    path(r'api-token-refresh/', refresh_jwt_token),

]
