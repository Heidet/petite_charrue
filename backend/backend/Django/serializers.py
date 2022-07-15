from rest_framework import serializers
from .models import Services
from .models import Service


# Cr�erserializers
# S�rialiseurs pour convertir les instances de mod�le en JSON afin que l'interface puisse fonctionner avec les donn�es re�ues.

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        # fields = ('id', 'title', 'description')
        fields = ('id', 'title', 'description',)
        
        
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id','content1', 'content2', 'content3')
        
        
# class Service1Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = Service1
#         fields = ('content',)
        