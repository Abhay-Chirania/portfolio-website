# Generated by Django 3.2.2 on 2021-05-15 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0012_auto_20210512_1220'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='thumbnail',
            field=models.CharField(max_length=100),
        ),
    ]
