from django.shortcuts import render
from .models import User, Customer, Student
from django.http import JsonResponse
from django.db.models import Sum
from json import loads
from django.views.decorators.csrf import csrf_exempt

# Create your views here.76


def Get(req):
    if req.method == "GET":
        result = []
        cust = Student.objects.values()
        result.extend(list(cust))
        return JsonResponse({"error": "NA", "data": result})
    else:
        return JsonResponse({"error": "Yes", "method": "not supported"})


@csrf_exempt
def Post(req):
    if req.method == "POST":
        student_jsonString = req.body.decode("utf-8")
        s_data = loads(student_jsonString)
        student = Student(
            first_name=s_data["first_name"],
            last_name=s_data["last_name"],
            age=s_data["age"],
            city=s_data["city"],
        )
        student.save()

        result = {
            "firstName": student.first_name,
            "lastName": student.last_name,
            "age": student.age,
            "city": student.city,
        }

        return JsonResponse({"error": "No", "data": result})
    else:
        return JsonResponse({"error": "Yes", "data": "method not supported"})


@csrf_exempt
def Patch(req, id):
    if req.method == "PATCH":
        body = loads(req.body.decode("utf-8"))
        stud = Student.objects.filter(id=id)[0]
        stud.first_name = body["first_name"]
        stud.last_name = body["last_name"]
        stud.age = body["age"]
        stud.city = body["city"]
        stud.save()

        result = (
            {
                "firstname": stud.first_name,
                "lastname": stud.last_name,
                "age": stud.age,
                "city": stud.city,
            },
        )

        return JsonResponse({"error": "No", "data": result})
    else:
        return JsonResponse({"error": "Yes", "data": "method not supported"})


@csrf_exempt
def Delete(req, id):
    if req.method == "DELETE":
        try:
            stud = Student.objects.filter(id=id)[0]
            stud.delete()
            return JsonResponse({"error": "No", "data": True})
        except Exception as ex:
            return JsonResponse({"error": "Yes", "data": ex.args[0]})
    else:
        return JsonResponse({"error": "Yes", "data": "method not supported"})
