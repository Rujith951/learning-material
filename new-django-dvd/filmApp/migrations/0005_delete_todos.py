# Generated by Django 4.2.3 on 2023-10-19 20:01

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("filmApp", "0004_alter_todos_options"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Todos",
        ),
    ]