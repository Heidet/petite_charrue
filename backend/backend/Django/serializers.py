from rest_framework import serializers
from .models import Services
from .models import Service
from .models import ArticlesChauds

from rest_framework.views import APIView

# Créerserializers
# Sérialiseurs pour convertir les instances de modèle en JSON afin que l'interface puisse fonctionner avec les données reçues.

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        # fields = ('id', 'title', 'description')
        fields = ('id', 'title', 'description',)
        
        
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id', 'content1', 'content2', 'content3')
        
  
class ArticlesChaudsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticlesChauds
        fields = '__all__'
# class Service1Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = Service1
#         fields = ('content',)
        