#!/bin/bash

# PythonAnywhere config script. Run run.sh after. 

echo " ~~~~~~ Foodle : Repo initialisation Bash shell script ~~~~~~ "

echo "The follow file configures the following : "
echo "Setting up venv + installing requirements.txt"
echo "Install & Building npm"
echo "serving using python manage.py runserver"
echo "Estimated time : 1-5 minutes"

echo " ~~~~~~  changing the default directory for npm  ~~~~~~ "
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
npm config get prefix

echo " ~~~~~~   add ~/.npm-global to your path  ~~~~~~ "

echo 'PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc

echo " ~~~~~~ Configuring a local python 3.6 virtualenv ~~~~~~ "

pip3.6 install virtualenv
virtualenv -p python3.6 venv
. venv/bin/activate
echo "~~~~~~ venv activated - installing project requirements.txt ~~~~~~"
pip3.6 install -r requirements.txt


# install globablly (within the environment)
# npm cache verify
# if npm version is < 5 then use `npm cache clean`

# rm -f package-lock.json && npm install




echo ""Moving into the foodle/front-end directory""
echo "$(pwd)"
# foodle - An app within the project, containing the Django Rest Framework views and URL routing
cd foodle/front-end || exit

echo " ~~~~~~  npm install -g @angular/cli@latest - installs the latest version  ~~~~~~ "
npm install -g @angular/cli@latest
npm install --save-dev @angular-devkit/build-angular

# update the node package to be on the same cli as the core
npm update
ng update @angular/cli @angular/core
# ng-bootstrap
npm install --save @ng-bootstrap/ng-bootstrap
# Angular Material
npm install --save @angular/material

# https://www.techiediaries.com/django-angular-tutorial/#Fixing_Hot_Code_Reloadnp
#npm install webpack-bundle-tracker --save


# Slightly different than the above statement - not sure why, gives you theme options, etc.
ng add @angular/material


echo " ~~~~~~   ng build... ~~~~~~"

# ng build command writes generated build artifacts to the output folder (/dist)
ng build
echo "~~~~~~ npm installed successfully. ~~~~~~"


# CD back into the home directory ./Foodle_dev
cd ../..
echo "$(pwd)"

echo " ~~~~~~ Current working directory :: ~~~~~~ "
echo "$(pwd)"

echo " ~~~~~~ Dependecy Check ::  ~~~~~~ "

npm ls --depth 0

echo " ~~~~~~ Git Stauts :: ~~~~~~ "
git status

echo "~~~~~~ manage.py runserver ~~~~~~"