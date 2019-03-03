#!/bin/bash

cd ..
. venv/bin/activate
git status
python manage.py runserver