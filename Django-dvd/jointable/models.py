from django.db import models


# Create your models here.


class Author(models.Model):
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    MiddleName = models.CharField(max_length=100)


class Books(models.Model):
    title = models.CharField(max_length=200)
    total_page = models.IntegerField()
    auth_id = models.ForeignKey(Author, on_delete=models.CASCADE)


class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField()
    city = models.CharField(max_length=255)
