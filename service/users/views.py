# django modules
from django.contrib.auth import authenticate, login

# drf modules
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

# permissions
from users.permissions import IsUserOwner
# models
from users.models import User
from users.serializers import UserSerializer

class AuthViewSet(ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    authentication_classes = []

    def signup(self, request):
    
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            
            # Check if the user object is created successfully
            if user:
                login(request, user)
                return Response(
                    serializer.data,
                    status=status.HTTP_201_CREATED
                )
            else:
                return Response(
                    {"error": "Failed to create user."},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )
