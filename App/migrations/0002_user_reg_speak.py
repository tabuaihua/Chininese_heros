# Generated by Django 4.1.7 on 2023-03-23 06:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='reg_speak',
            field=models.TextField(default='有技术漏洞或者建议，欢迎指出', verbose_name='故事'),
        ),
    ]
