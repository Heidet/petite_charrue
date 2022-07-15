from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ServicesSerializer
from .serializers import ServiceSerializer


from .models import Services
from .models import Service


# Create your views here.

class ServicesView(viewsets.ModelViewSet):
    serializer_class = ServicesSerializer
    queryset = Services.objects.all()
    
class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()
    
# class Service2View(viewsets.ModelViewSet):
#     serializer_class = Service2Serializer
#     queryset = Service2.objects.all()
    
# class Service3View(viewsets.ModelViewSet):
#     serializer_class = Service3Serializer
#     queryset = Service3.objects.all()