from django.db import models

# Create your models here.

class imageLinks(models.Model):
    image1 = models.CharField(max_length=70)
    image2 = models.CharField(max_length=70)
    image3 = models.CharField(max_length=70)
    image4 = models.CharField(max_length=70)
    tweet1 = models.CharField(max_length=100)
    tweet2 = models.CharField(max_length=100)
    tweet3 = models.CharField(max_length=100)
    tweet4 = models.CharField(max_length=100)
