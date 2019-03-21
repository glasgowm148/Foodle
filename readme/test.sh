#!/bin/bash

cd .
. venv/bin/activate
git status
#ng new codelyzer

cd foodle/front-end || exit
echo " ~~~~~~ Dependecy Check ::  ~~~~~~ "

npm ls --depth 0

echo " ~~~~~~ Build  ::  ~~~~~~ "

ng build

echo " ~~~~~~ ng test  ::  ~~~~~~ "

ng test

echo " ~~~~~~ ng lint  ::  ~~~~~~ "

ng lint 
cd ../..
python manage.py runserver