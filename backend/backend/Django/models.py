from django.db import models
# Create your models here.

class Services(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    
    def _str_(self):
        return self.title
    
class Service(models.Model):
    content1 = models.TextField(max_length=512, default='SOME STRING')
    content2 = models.TextField(max_length=512, default='SOME STRING')
    content3 = models.TextField(max_length=512, default='SOME STRING')

    def _str_(self):
        return self.content1
    
class ArticlesChauds(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.DecimalField(max_digits=1000, decimal_places=2)
    article_img = models.ImageField(upload_to='media/')
    
    def _str_(self):
        return self.name
# class Service2(models.Model):
#     content = models.TextField()

#     def _str_(self):
#         return self.content
    
# class Service3(models.Model):
#     content = models.TextField()

#     def _str_(self):
#         return self.content
    