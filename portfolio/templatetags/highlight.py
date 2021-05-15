from django import template
from django.utils.safestring import mark_safe
import re


register = template.Library()


@register.filter
def highlight_words(text):
    x = re.findall(r'\[([^]]*)\]', text)
    for i in x:
        highlighted = re.sub(i, '<span style="color: #44EC93">{}</span>'.format(i), text)
        text = highlighted.replace('[','')
        text = text.replace(']','')
    return mark_safe(text)