from django.http import JsonResponse
from .models import Customer, Payment
from django.db.models import Avg, Sum, Count, Min, Max, Q, F


# Create your views here.
def getdetails(req, id):
    if req.method == "GET":
        result = []
        custPayment = Payment.objects.filter(customer_id=id)
        for obj in custPayment:
            data = {}
            data["paymentID"] = obj.payment_id
            data["amount"] = obj.amount
            data["paymentDate"] = obj.payment_date
            result.append(data)
        return JsonResponse({"error": "NA", "data": result})
    else:
        return JsonResponse({"error": "occured", "data": "method not supported"})
