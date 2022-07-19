from django.contrib import admin
from .models import Services
from .models import Service
from .models import ArticlesChauds




class ServicesAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    

class ServiceAdmin(admin.ModelAdmin):
    list_display = ('content1', 'content2', 'content3')
    
    
class ArticlesChaudsAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price', 'article_img')

# Register your models here.
admin.site.register(Service, ServiceAdmin)
admin.site.register(Services, ServicesAdmin)
admin.site.register(ArticlesChauds, ArticlesChaudsAdmin)
