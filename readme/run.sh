#!/bin/bash

cd .
. venv/bin/activate
git status
cd foodle/front-end || exit
ng new codelyzer
ng build
ng test
ng lint 
cd ../..
python manage.py runserver