# Generated by Django 4.2.3 on 2023-08-03 12:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("app", "0003_student"),
    ]

    operations = [
        migrations.CreateModel(
            name="Author",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("FirstName", models.CharField(max_length=100)),
                ("LastName", models.CharField(max_length=100)),
                ("MiddleName", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="Books",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("total_page", models.IntegerField()),
                (
                    "auth_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="app.author"
                    ),
                ),
            ],
        ),
    ]
