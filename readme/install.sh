#!/bin/bash

# Mac OSX / Linux config script. Run check.sh after. 
echo " ~~~~~~ Foodle : Repo initialisation Bash shell script ~~~~~~ "

echo "The follow file configures the following : "
echo "Setting up venv + installing requirements.txt"
echo "Install & Building npm"
echo "serving using python manage.py runserver"
echo "Estimated time : 1-5 minutes"

echo " ~~~~~~ Configuring a local python 3.6 virtualenv ~~~~~~ "

pip3.6 install virtualenv
virtualenv -p python3.6 venv
. venv/bin/activate
echo "~~~~~~ venv activated - installing project requirements.txt ~~~~~~"
pip3.6 install -r requirements.txt



# Custom bash/sh script to enter into the correct directory. 
echo ""Moving into the foodle/front-end directory""
echo "$(pwd)"
# foodle - An app within the project, containing the Django Rest Framework views and URL routing
cd foodle/front-end || exit

# install globablly (within the environment)
# npm cache verify
# if npm version is < 5 then use `npm cache clean`

# rm -f package-lock.json && npm install

echo " ~~~~~~  npm install -g @angular/cli@latest - installs the latest version  ~~~~~~ "
npm install -g @angular/cli@latest

#
npm install bootstrap
npm install --save-dev @angular-devkit/build-angular

# update the node package to be on the same cli as the core
npm update
ng update @angular/cli @angular/core
# ng-bootstrap
npm install --save @ng-bootstrap/ng-bootstrap

echo "change selectors here?"

# Angular Material
npm install --save @angular/material

# https://www.techiediaries.com/django-angular-tutorial/#Fixing_Hot_Code_Reloadnp
#npm install webpack-bundle-tracker --save

# Slightly different than the above statement - not sure why, gives you theme options, etc.
ng add @angular/material



# you can install npx and run npx ng <command> within
#  the local directory where npm install @angular/cli was run, 
# which will use the locally installed angular-cli.

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

echo " ~~~~~~ Git Status :: ~~~~~~ "
git status

echo "~~~~~~ manage.py runserver ~~~~~~"



# Run the python server - which is linked with angular via the REST framework. 
python manage.py runserver
