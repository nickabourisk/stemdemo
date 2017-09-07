# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-07 19:55
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('localization', '0002_country'),
        ('stemdemoapp', '0002_whitepaper'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='chat_muted',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='country',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='users', to='localization.Country'),
        ),
    ]
