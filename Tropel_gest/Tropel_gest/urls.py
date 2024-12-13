"""
URL configuration for Tropel_gest project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('eventos/', views.lista_eventos, name='lista_eventos'),
    path('eventos/crear/', views.crear_evento, name='crear_evento'),
    path('eventos/editar/<int:evento_id>/', views.editar_evento, name='editar_evento'),
    path('eventos/eliminar/<int:evento_id>/', views.eliminar_evento, name='eliminar_evento'),
    #path('eventos/anadir_deportista/<int:evento_id>/', views.anadir_deportista_evento, name='anadir_deportista_evento'),
    #path('eventos_deportista/crear/', views.crear_evento_deportista, name='crear_evento_deportista'),
    path('eventos/<int:evento_id>/resultados/', views.lista_resultados, name='lista_resultados'),  # Agregando la ruta para lista_resultados
    path('resultados/<int:resultado_id>/crear/', views.crear_resultado, name='crear_resultado'),
    path('resultados/<int:resultado_id>/editar/', views.editar_resultado, name='editar_resultado'),
    path('resultados/<int:resultado_id>/eliminar/', views.eliminar_resultado, name='eliminar_resultado'),
    path('deportistas/', views.lista_deportistas, name='lista_deportistas'),
    path('deportista/crear/', views.crear_deportista, name='crear_deportista'),
    path('deportista/editar/<int:deportista_id>/', views.editar_deportista, name='editar_deportista'),
    path('deportista/eliminar/<int:deportista_id>/', views.eliminar_deportista, name='eliminar_deportista'),
    path('guardar/', views.entrada, name='guardar')
]
