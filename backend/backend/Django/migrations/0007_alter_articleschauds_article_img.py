# Generated by Django 4.0.6 on 2022-07-18 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Django', '0006_rename_article_img_articleschauds_article_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articleschauds',
            name='article_img',
            field=models.ImageField(upload_to='media/'),
        ),
    ]
