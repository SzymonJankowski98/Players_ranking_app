from django import template

register = template.Library()

@register.simple_tag
def get_value_by_name(player, name):
    return player.get_value_by_name(name)