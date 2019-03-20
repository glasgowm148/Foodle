from django.urls import path, include
from rest_framework import routers
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'posts', views.BlogPostViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [

    path(r'api/', include(router.urls)),
    path(r'', views.index, name='index'),
    path(r'about/', views.about, name='about'),
    path(r'deal_page/', views.deal_page, name='deal_page'),
    path(r'contact/', views.contact, name='contact'),
    path(r'submit/', views.submit, name='submit'),
    path(r'faq/', views.faq, name='faq'),



    # Login and Register
    path(r'register/', views.register, name='register'),
    path(r'login/', views.user_login, name='login'),
    path(r'logout/', views.user_logout, name='logout'),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
