from django.urls import path
from .views import *

urlpatterns = [path("payment-details/<int:id>/", getdetails)]
