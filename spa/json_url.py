from django.urls import  path
from .json import allAnimals

urlpatterns = [
    path('', allAnimals, name = "spa-json-index"),
]