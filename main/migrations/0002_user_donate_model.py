# Generated by Django 5.1.1 on 2024-11-23 00:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='user_donate_model',
            fields=[
                ('username', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('dollars', models.SmallIntegerField()),
            ],
        ),
    ]
