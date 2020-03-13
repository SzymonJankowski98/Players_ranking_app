from django.contrib import admin
from .models import Nationality
from .models import League
from .models import Player

admin.site.register(Nationality)
admin.site.register(League)
admin.site.register(Player)
