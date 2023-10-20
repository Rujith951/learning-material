from django.http import JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from json import loads

# Create your views here

"""
 
    {
        id: customer_id,
        fname, 
        email,
        active,
        address: {
            place: address,
            district,
            pincode,
            phone
        }
    }

"""


@csrf_exempt
def testing(req):
    if req.method == "POST":
        body = loads(req.body.decode("utf-8"))
        return JsonResponse({"error": "No", "data": []})
    else:
        return JsonResponse({"error": "Yes", "method": "not supported"})
