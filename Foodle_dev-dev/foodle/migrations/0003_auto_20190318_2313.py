# Generated by Django 2.1.7 on 2019-03-18 23:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('foodle', '0002_aboutpage_deal_userprofile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
