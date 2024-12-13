from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from .forms import EventoForm, ResultadoForm, DeportistaForm
from events.models import Evento,Categoria,Deportista,Resultado

def saludo(request): #Primera vista
    Team='Dromedario-Flotamet'
    return render(request,'Ciclistas.html',{"Team":Team})

def entrada(request): #Guardar datos
    return HttpResponse("Estan guardados los datos")

def lista_eventos(request):
    # Obtener el parámetro de orden desde la URL
    order_by = request.GET.get('order_by', 'fecha')  # Por defecto se ordena por fecha
    direction = request.GET.get('direction', 'asc')
    
    # Aplicar el orden ascendente o descendente
    if direction == 'desc':
        order_by = f'-{order_by}'
    
    eventos = Evento.objects.select_related('categoria').order_by(order_by)
    form = EventoForm()  # Crear una instancia del formulario para usar en los modales
    formularios_edicion = {evento.id: EventoForm(instance=evento) for evento in eventos}  # Formularios de edición por evento
    
    context = {
        'eventos': eventos,
        'order_by': order_by,
        'direction': direction,
        'form': form,  # Pasar el formulario al contexto,
        'formularios_edicion' : formularios_edicion,
    }
    
    return render(request, 'lista_eventos.html', context)

def crear_evento(request):
    if request.method == 'POST':
        form = EventoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_eventos')
    else:
        form = EventoForm()
        
    return render(request, 'lista_eventos.html', {'form': form})

def editar_evento(request, evento_id):
    evento = get_object_or_404(Evento, id=evento_id)
    
    if request.method == 'POST':
        form = EventoForm(request.POST, instance=evento)
        if form.is_valid():
            form.save()
            return redirect('lista_eventos')  # Redirigir a la lista de eventos después de editar
    else:
        form = EventoForm(instance=evento)
    
    # Renderizar la lista de eventos con el formulario de edición en el modal
    eventos = Evento.objects.all()
    return render(request, 'lista_eventos.html', {'form': form, 'eventos': eventos, 'evento_a_editar': evento})

def eliminar_evento(request, evento_id):
    evento = get_object_or_404(Evento, id=evento_id)
    if request.method == 'POST':
        evento.delete()
        return redirect('lista_eventos')

    eventos = Evento.objects.filter(evento=evento)
    return render(request, 'lista_eventos.html')

def lista_deportistas(request):
    # Obtener el parámetro de orden desde la URL
    order_by = request.GET.get('order_by', 'nombre')  # Por defecto se ordena por fecha
    direction = request.GET.get('direction', 'asc')
    
    # Aplicar el orden ascendente o descendente
    if direction == 'desc':
        order_by = f'-{order_by}'
    
    deportistas = Deportista.objects.all().order_by(order_by)
    form = DeportistaForm()  # Crear una instancia del formulario para usar en los modales
    formularios_edicion = {deportista.id: DeportistaForm(instance=deportista) for deportista in deportistas}  # Formularios de edición por evento
    
    context = {
        'deportistas': deportistas,
        'order_by': order_by,
        'direction': direction,
        'form': form,
        'formularios_edicion' : formularios_edicion,
    }
    
    return render(request, 'lista_deportistas.html', context)

def crear_deportista(request):
    if request.method == 'POST':
        form = DeportistaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_deportistas')  # Redirigir a la lista de deportistas después de crear uno nuevo
    else:
        form = DeportistaForm()
        
    return render(request, 'lista_deportistas.html', {'form': form})

def editar_deportista(request, deportista_id):
    deportista = get_object_or_404(Deportista, id=deportista_id)
    
    if request.method == 'POST':
        form = DeportistaForm(request.POST, instance=deportista)
        if form.is_valid():
            form.save()
            return redirect('lista_deportistas')  # Redirigir a la lista de deportistas después de editar
    else:
        form = DeportistaForm(instance=deportista)
    
    # Renderizar la lista de deportistas con el formulario de edición en el modal
    deportistas = Deportista.objects.all()
    return render(request, 'lista_deportistas.html', {'form': form, 'deportistas': deportistas, 'deportista_a_editar': deportista})

def eliminar_deportista(request, deportista_id):
    deportista = get_object_or_404(Deportista, id=deportista_id)
    if request.method == 'POST':
        deportista.delete()
        return redirect('lista_deportistas')

    deportistas = Deportista.objects.all()
    return render(request, 'lista_deportistas.html', {'deportistas': deportistas})

# def anadir_deportista_evento(request, evento_id):
#     evento = get_object_or_404(Evento, pk=evento_id)
    
#     if request.method == 'POST':
#         deportistas_ids = request.POST.getlist('deportistas')
#         deportistas = Deportista.objects.filter(id__in=deportistas_ids)
#         evento.deportistas.add(*deportistas)
#         return redirect('lista_eventos')  # Redirige a la lista de eventos después de añadir deportistas
    
#     return redirect('lista_eventos')  # En caso de que no sea un POST, redirige de vuelta


# def crear_evento_deportista(request):
#     if request.method == 'POST':
#         evento_id = request.POST.get('evento')
#         # Asegúrate de que el evento existe
#         evento = get_object_or_404(Evento, id=evento_id)
#         form = ResultadoForm(request.POST)
#         if form.is_valid():
#             resultado = form.save(commit=False)
#             resultado.evento = evento
#             resultado.save()
#             return redirect('eventos')  # Redirige a la lista de eventos después de guardar
#         else:
#             # Si el formulario no es válido, regresa a la misma página y muestra errores
#             eventos = Evento.objects.select_related('categoria').order_by('fecha')
#             context = {
#                 'eventos': eventos,
#                 'form': form,  # Pasa el formulario con errores
#             }
#             return render(request, 'eventos.html', context)
#     else:
#         return redirect('lista_eventos')  # En caso de que no sea un POST, redirige de vuelta
    
def lista_resultados(request, evento_id):
    evento = get_object_or_404(Evento, id=evento_id)
    resultados = Resultado.objects.filter(evento=evento)
    
    # Crear formularios de edición para cada resultado
    formularios_edicion = {resultado.id: ResultadoForm(instance=resultado) for resultado in resultados}

    # Formulario para añadir un nuevo resultado
    form_nuevo = ResultadoForm()

    return render(request, 'lista_resultados.html', {
        'evento': evento,
        'resultados': resultados,
        'formularios_edicion': formularios_edicion,
        'form_nuevo': form_nuevo,
    })
    
def crear_resultado(request, resultado_id):
    evento = get_object_or_404(Evento, id=resultado_id)
    
    if request.method == 'POST':
        form = ResultadoForm(request.POST)
        if form.is_valid():
            resultado = form.save(commit=False)
            resultado.evento = evento
            resultado.save()
            return redirect('lista_resultados', evento_id=evento.id)
    else:
        form = ResultadoForm()
        
    resultados = Resultado.objects.filter(evento=evento)
    return render(request, 'lista_resultados.html', {'form': form, 'evento': evento, 'resultados': resultados})

def editar_resultado(request, resultado_id):
    evento = get_object_or_404(Resultado, id=resultado_id)
    
    if request.method == 'POST':
        form = ResultadoForm(request.POST, instance=evento)
        if form.is_valid():
            form.save()
            return redirect('lista_resultados', evento_id=evento.evento.id)
    else:
        form = ResultadoForm(instance=evento)
        
    resultados = Resultado.objects.filter(evento=evento)
    return render(request, 'lista_resultados.html', {'form': form, 'evento': evento, 'resultados': resultados})

def eliminar_resultado(request, resultado_id):
    evento = get_object_or_404(Resultado, id=resultado_id)
    evento_id = evento.evento.id
    if request.method == 'POST':
        evento.delete()
        return redirect('lista_resultados', evento_id=evento_id)

    resultados = Resultado.objects.filter(evento=evento)
    return render(request, 'lista_resultados.html', {'resultados': resultados})


