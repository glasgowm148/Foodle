# Generated by Django 2.1.7 on 2019-03-19 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodle', '0004_submitmodel'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='submitmodel',
            name='website',
        ),
        migrations.AddField(
            model_name='submitmodel',
            name='info',
            field=models.CharField(default='', max_length=200),
        ),
    ]