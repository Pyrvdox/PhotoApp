from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status
from .models import CustomUser
from django.http import HttpResponse
from rest_framework.response import Response
from .serializers import UserSerializer, LoginSerializer

# Create your views here.
class RegisterView(APIView):
    permission_classes = [permissions.AllowAny,]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [permissions.AllowAny,]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            return Response({'username': user.username}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
