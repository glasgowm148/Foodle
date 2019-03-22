from django.urls import path, include
from rest_framework import routers
from . import views
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# https://stackoverflow.com/questions/53739868/register-your-django-router
# https://www.django-rest-framework.org/api-guide/routers/
# https://stackoverflow.com/questions/46141375/deploying-an-angular-4-frontend-with-a-django-rest-framework-backend-on-heroku
# https://codeburst.io/create-a-django-api-in-under-20-minutes-2a082a60f6f3
router = routers.DefaultRouter(trailing_slash=False)
router.register(r'posts', views.BlogPostViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'deals', views.DealViewSet, basename='deal')


urlpatterns = [

    path(r'api/', include(router.urls)),
    path(r'', views.index, name='index'),
    path(r'about/', views.about, name='about'),
    path(r'deal_page/', views.deal_page, name='deal_page'),
    path(r'contact/', views.contact, name='contact'),
    path(r'submit/', views.submit, name='submit'),
    path(r'faq/', views.faq, name='faq'),
    url(r'^deal_page/<slug:deal_name_slug>/', views.deal_page, name='deal_page'),
    path(r'like/', views.like, name='like'),
    path(r'dislike/', views.dislike, name='dislike'),
    path('contactHandle/', views.contactHandle, name='contactHandle'),



    # Login and Register
    path(r'register/', views.register, name='register'),
    path(r'login/', views.user_login, name='login'),
    path(r'logout/', views.user_logout, name='logout'),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
