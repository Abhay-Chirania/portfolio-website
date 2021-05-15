# Generated by Django 3.2.2 on 2021-05-11 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0008_alter_project_long_desc'),
    ]

    operations = [
        migrations.CreateModel(
            name='More',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('desc', models.CharField(max_length=150)),
                ('tenure', models.CharField(max_length=20)),
                ('link', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
        migrations.AlterField(
            model_name='project',
            name='short_desc',
            field=models.CharField(max_length=100),
        ),
    ]
