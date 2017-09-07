from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User, Whitepaper, Transcript, TranscriptLine, TranscriptAuthor


class MyUserAdmin(UserAdmin):
    pass


# admin.site.register(User, MyUserAdmin)
admin.site.register(Whitepaper)
admin.site.register(Transcript)
admin.site.register(TranscriptLine)
admin.site.register(TranscriptAuthor)
