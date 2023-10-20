from django.urls import path
from . import views

urlpatterns = [
    path("Get/", views.Get, name="get"),
    path("Post/", views.Post, name="post"),
    path("Patch/<int:id>", views.Patch, name="post"),
    path("Delete/<int:id>", views.Delete, name="post"),
]
