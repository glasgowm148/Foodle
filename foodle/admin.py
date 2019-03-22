from django.contrib import admin
from .models import BlogPost, DealModel

@admin.register(BlogPost)
class PostAdmin(admin.ModelAdmin):
    list_display = ('user', 'date', 'body')
    ordering = ['-date']

class DealModelAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug':('info',)}

admin.site.register(DealModel, DealModelAdmin)