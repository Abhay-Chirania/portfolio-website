# Generated by Django 3.2.2 on 2021-05-11 07:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_projects'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Projects',
            new_name='Project',
        ),
    ]
