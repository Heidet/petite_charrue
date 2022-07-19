from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ServicesSerializer
from .serializers import ServiceSerializer
from .serializers import ArticlesChaudsSerializer
from .models import Services
from .models import Service
from .models import ArticlesChauds

# Create your views here.

class ServicesView(viewsets.ModelViewSet):
    serializer_class = ServicesSerializer
    queryset = Services.objects.all()
    
class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()
    
class ArticlesChaudView(viewsets.ModelViewSet):
    serializer_class = ArticlesChaudsSerializer
    queryset = ArticlesChauds.objects.all()

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

