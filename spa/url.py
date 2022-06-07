from django.urls import  path, include
# from django.conf.urls.static import static
from .views import index

urlpatterns = [
    path('', index, name = "spa-index"),
    path('json/', include("spa.json_url")),
]