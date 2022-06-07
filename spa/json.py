
from django.http import JsonResponse
from spa.models import Animal

def allAnimals(request):
    animalValue = list(Animal.objects.all().values())
    for a in animalValue:
        a['photos'] = "https://vflebus-django.herokuapp.com/static/photos/" + a['photos'].split("photos/")[1]
        print(a['photos'])
    
    return JsonResponse({"data": animalValue})