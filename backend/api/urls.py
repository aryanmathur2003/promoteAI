from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    # path("", views.index, name="index"),
    
    path('createImage/', views.createImage.as_view()),
    path('getImage/', views.getImage.as_view()),
]
