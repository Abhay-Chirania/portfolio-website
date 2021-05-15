from django.db import models

class Info(models.Model):
    tagline = models.CharField(max_length=25)
    short_desc = models.TextField()
    about = models.TextField()
    skills_8_csv_values = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    instagram = models.CharField(max_length=80)
    linkedin = models.CharField(max_length=80)
    github = models.CharField(max_length=80)



class Project(models.Model):
    title = models.CharField(max_length=15)
    short_desc = models.CharField(max_length=100)
    long_desc =  models.TextField(blank=True,null=True)
    website = models.CharField(max_length=100,blank=True,null=True)
    github = models.CharField(max_length=100,blank=True,null=True)
    youtube =  models.CharField(max_length=100,blank=True,null=True)
    thumbnail = models.ImageField()
    
    def __str__(self):
        return self.title

class More(models.Model):
    title = models.CharField(max_length=30)
    desc = models.CharField(max_length=150)
    secondary_desc =  models.CharField(max_length=50)
    link = models.CharField(max_length=100,blank=True,null=True)
    
    def __str__(self):
        return self.title

