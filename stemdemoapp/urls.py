from django.conf.urls import url

from . import views

urlpatterns = [
    url(r"^$", views.index, name="index"),
    url(r"^whitepapers/$", views.whitepapers, name="index"),
    url(r"^update_whitepaper/$", views.update_whitepaper),
]