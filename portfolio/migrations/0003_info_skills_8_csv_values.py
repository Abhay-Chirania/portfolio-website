# Generated by Django 3.2.2 on 2021-05-11 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_alter_info_tagline'),
    ]

    operations = [
        migrations.AddField(
            model_name='info',
            name='skills_8_csv_values',
            field=models.CharField(default='Python,Electronics', max_length=200),
            preserve_default=False,
        ),
    ]
