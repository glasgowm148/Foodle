#!/bin/bash

cd .
. venv/bin/activate
git status
#ng new codelyzer

cd foodle/front-end || exit
ng build
ng test
ng lint 
cd ../..
python manage.py runserver