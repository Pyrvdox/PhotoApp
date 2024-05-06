from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status
from .models import CustomUser
from rest_framework.response import Response
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer
from django.contrib.auth import login, logout
from rest_framework.authentication import SessionAuthentication

# Create your views here.
class RegisterView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            login(request, user)
            return Response({'username': user.username}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
    

class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated, )
    authentication_classes = (SessionAuthentication, )

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)