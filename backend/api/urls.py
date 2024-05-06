from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='register'),
    path('logout/', views.LogoutView.as_view(), name='register'),
    path('user/', views.UserView.as_view(), name='user'),
]
