from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=50)
    color = models.CharField(max_length=7, default='#ffffff')  # Almacena colores en formato HEX
    
    def __str__(self):
        return self.nombre
    
class Modalidad(models.Model):
    nombre = models.CharField(max_length=50)
    color = models.CharField(max_length=7, default='#ffffff')  # Almacena colores en formato HEX
    
    def __str__(self):
        return self.nombre

class Evento(models.Model):
    fecha = models.DateTimeField()
    lugar = models.CharField(max_length=200)
    nombre = models.CharField(max_length=200)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    modalidad = models.ForeignKey(Modalidad, on_delete=models.CASCADE)
    objetivo = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])
    observaciones = models.TextField(blank=True, null=True)
    clasificacion = models.FileField(upload_to='clasificaciones/', blank=True, null=True)

    def __str__(self):
        return self.nombre


class Deportista(models.Model):
    fecha_nacimiento = models.DateField()
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    dni = models.CharField(max_length=20, unique=True)
    numero_licencia = models.CharField(max_length=50, unique=True)
    email = models.EmailField()
    telefono = models.IntegerField()

    def __str__(self):
        return f"{self.nombre} {self.apellidos}"

class DatosDeportista(models.Model):
    deportista = models.ForeignKey(Deportista, on_delete=models.CASCADE)
    fecha = models.DateField()
    corredor = models.BooleanField(default=False)
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    altura = models.DecimalField(max_digits=5, decimal_places=2)
    ftp = models.DecimalField(max_digits=5, decimal_places=2)
    pulso = models.IntegerField()

    def __str__(self):
        return f"Datos de {self.deportista} en {self.fecha}"

class Resultado(models.Model):
    fecha = models.DateField()
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE)
    deportista = models.ForeignKey(Deportista, on_delete=models.CASCADE)
    resultado = models.CharField(max_length=100)
    objetivo = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])
    valoracion_corredor = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])
    valoracion_director = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['evento', 'deportista'], name='unique_resultado_per_evento_deportista')
        ]

    def __str__(self):
        return f"Resultado de {self.deportista} en {self.evento}"

