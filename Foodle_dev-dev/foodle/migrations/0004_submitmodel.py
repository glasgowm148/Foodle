# Generated by Django 2.1.7 on 2019-03-19 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodle', '0003_auto_20190318_2313'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubmitModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('website', models.URLField(blank=True)),
                ('picture', models.ImageField(blank=True, upload_to='deals_pictures')),
            ],
        ),
    ]
