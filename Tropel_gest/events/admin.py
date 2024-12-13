from django.contrib import admin
from .models import Evento, Deportista, DatosDeportista, Resultado, Categoria, Modalidad

admin.site.register(Evento)
admin.site.register(Deportista)
admin.site.register(DatosDeportista)
admin.site.register(Resultado)
admin.site.register(Categoria)
admin.site.register(Modalidad)
