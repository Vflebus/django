from django.db import models

# Create your models here.
"""
Animal
-Nom
-Espèce
-Race
-Âge
-Description
-Photos
"""

class Animal(models.Model):
    name = models.CharField(max_length=60)
    species = models.CharField(max_length=60)
    race = models.CharField(max_length=60)
    age = models.IntegerField(default=0)
    description = models.TextField(blank=True)
    photos = models.ImageField(upload_to="spa/photos", blank=True, null=True)

    def __str__(self):
        return self.name
