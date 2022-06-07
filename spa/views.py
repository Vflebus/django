from django.shortcuts import render

from spa.models import Animal

# Create your views here.
def index(request):
    allAnimal = Animal.objects.all()
    for animal in allAnimal:
        animal.picture = animal.photos.url.split("photos/")[1]
        print (animal.pictures)
    return render(request, "spa/index.html", context={"allAnimals": allAnimal})