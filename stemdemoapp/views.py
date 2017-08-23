from django.shortcuts import render
from establishment.funnel.state import State
from establishment.funnel.base_views import single_page_app, global_renderer
from stemdemoapp.models import Whitepaper


def render_single_page_app(request):
    return render(request, "stemdemoapp/app.html", {})


global_renderer.render_single_page_app = render_single_page_app


@single_page_app
def index(request):
    return State()


@single_page_app
def whitepapers(request):
    return State.from_objects(Whitepaper.objects.all())
