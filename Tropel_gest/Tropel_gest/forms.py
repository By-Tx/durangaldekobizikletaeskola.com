from django import forms
from events.models import Evento, Deportista, Resultado

class EventoForm(forms.ModelForm):
    # deportistas = forms.ModelMultipleChoiceField(
    #     queryset=Deportista.objects.all(),
    #     widget=forms.CheckboxSelectMultiple,
    #     required=False  # Cambia esto según tus necesidades
    # )

    class Meta:
        model = Evento
        fields = ['nombre', 'fecha', 'lugar', 'objetivo','categoria', 'modalidad']
        widgets = {
            'fecha': forms.DateInput(attrs={'type': 'date'}),
            'objetivo': forms.Select(attrs={'class': 'form-select'}),
        }
        #fields = ['nombre', 'fecha', 'lugar', 'categoria', 'modalidad', 'deportistas']

class ResultadoForm(forms.ModelForm):
    class Meta:
        model = Resultado
        fields = ['fecha', 'deportista', 'resultado', 'objetivo', 'valoracion_corredor', 'valoracion_director']
        widgets = {
            'fecha': forms.DateInput(attrs={'type': 'date'}),
            'resultado': forms.TextInput(attrs={'class': 'form-control'}),
            'objetivo': forms.Select(attrs={'class': 'form-select'}),
            'valoracion_corredor': forms.Select(attrs={'class': 'form-select'}),
            'valoracion_director': forms.Select(attrs={'class': 'form-select'}),
        }

class DeportistaForm(forms.ModelForm):
    class Meta:
        model = Deportista
        fields = ['fecha_nacimiento', 'nombre', 'apellidos', 'dni', 'numero_licencia', 'email','telefono']
        widgets = {
            'fecha_nacimiento': forms.DateInput(attrs={'type': 'date'}),
        }
    def clean_email(self):
        email = self.cleaned_data.get('email')
        if not email:
            raise forms.ValidationError("Este campo es obligatorio.")
        if "@" not in email:  # Ejemplo básico de validación de email
            raise forms.ValidationError("Introduzca un correo electrónico válido.")
        return email