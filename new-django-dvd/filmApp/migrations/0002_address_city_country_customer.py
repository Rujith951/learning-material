# Generated by Django 4.2.3 on 2023-10-19 17:39

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("filmApp", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Address",
            fields=[
                ("address_id", models.AutoField(primary_key=True, serialize=False)),
                ("address", models.CharField(max_length=50)),
                ("address2", models.CharField(blank=True, max_length=50, null=True)),
                ("district", models.CharField(max_length=20)),
                ("postal_code", models.CharField(blank=True, max_length=10, null=True)),
                ("phone", models.CharField(max_length=20)),
                ("last_update", models.DateTimeField()),
            ],
            options={
                "db_table": "address",
                "managed": False,
            },
        ),
        migrations.CreateModel(
            name="City",
            fields=[
                ("city_id", models.AutoField(primary_key=True, serialize=False)),
                ("city", models.CharField(max_length=50)),
                ("last_update", models.DateTimeField()),
            ],
            options={
                "db_table": "city",
                "managed": False,
            },
        ),
        migrations.CreateModel(
            name="Country",
            fields=[
                ("country_id", models.AutoField(primary_key=True, serialize=False)),
                ("country", models.CharField(max_length=50)),
                ("last_update", models.DateTimeField()),
            ],
            options={
                "db_table": "country",
                "managed": False,
            },
        ),
        migrations.CreateModel(
            name="Customer",
            fields=[
                ("customer_id", models.AutoField(primary_key=True, serialize=False)),
                ("store_id", models.SmallIntegerField()),
                ("first_name", models.CharField(max_length=45)),
                ("last_name", models.CharField(max_length=45)),
                ("email", models.CharField(blank=True, max_length=50, null=True)),
                ("activebool", models.BooleanField()),
                ("create_date", models.DateField()),
                ("last_update", models.DateTimeField(blank=True, null=True)),
                ("active", models.IntegerField(blank=True, null=True)),
            ],
            options={
                "db_table": "customer",
                "managed": False,
            },
        ),
    ]
