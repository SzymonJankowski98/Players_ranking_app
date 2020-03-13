from django.forms.widgets import TextInput

class BirthdayInput(TextInput):
    input_type = 'date'