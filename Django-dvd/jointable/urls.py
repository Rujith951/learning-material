from django.urls import path
from .views import *

urlpatterns = [
    path("post/", post),
    path("get/", get),
    path("patch/<int:id>/", patch),
    path("delete/<int:id>/", delete),
]
