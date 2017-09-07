from django.shortcuts import render
from establishment.webapp.state import State
from establishment.webapp.base_views import single_page_app, global_renderer, ajax_required
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


@ajax_required
def update_whitepaper(request):
    whitepaper = Whitepaper.objects.get(id=request.POST["whitepaperId"])
    whitepaper.update_date()
    return State.from_objects(whitepaper)
