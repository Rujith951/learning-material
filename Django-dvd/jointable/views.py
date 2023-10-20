from django.http import JsonResponse
from .models import Books, Author, User
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Avg, Sum, Count, Min, Max, Q, F

# import json
from json import loads


@csrf_exempt
def post(req):
    if req.method == "POST":
        json_string = req.body.decode("utf-8")
        data = loads(json_string)

        """
        user = User(,
            first_name=data["firstname"],
            last_name=data["lastname"],
            age=data["age"]
            city=data["city"],
        )
        user.save()
        """
        """
        user = User.objects.create(
            first_name=data["firstname"],
            last_name=data["lastname"],
            age=data["age"],
            city=data["city"],
        )
        """
        user = User.objects.create(**data)
        res = {
            "firstname": user.first_name,
            "lastname": user.last_name,
            "age": user.age,
            "city": user.city,
        }
        return JsonResponse({"error": "NO", "data": res})

    else:
        return JsonResponse({"error": "YES", "data": "Method not supported"})


@csrf_exempt
def patch(req, id):
    if req.method == "PATCH":
        body = loads(req.body.decode("utf-8"))
        user = User.objects.filter(id=id)[0]
        user.last_name = body["last_name"]
        user.save()
        return JsonResponse(
            {
                "error": "NO",
                "data": {
                    "id": user.id,
                    "fname": user.first_name,
                    "lname": user.last_name,
                },
            }
        )
    else:
        return JsonResponse({"error": "YES", "data": "Method not supported"})


@csrf_exempt
def delete(req, id):
    if req.method == "DELETE":
        try:
            user = User.objects.filter(id=id)[0]
            user.delete()
            return JsonResponse({"error": "NA", "deleted": True})
        except Exception as ex:
            return JsonResponse({"error": "yes", "data": ex.args[0]})
    else:
        JsonResponse({"error": "yes", "data": "method not supported"})


def get(req):
    if req.method == "GET":
        result = []
        user = User.objects.values()
        result.extend(list(user))
        return JsonResponse({"error": "NA", "data": result})
    else:
        JsonResponse({"error": "yes", "data": "method not supported"})
