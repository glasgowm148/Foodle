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





echo ""Moving into the foodle/front-end directory""
echo "$(pwd)"
# foodle - An app within the project, containing the Django Rest Framework views and URL routing
cd foodle/front-end || exit


# npm i -f
# npm --production=false install
# npm install --legacy-bundling=false
# npm set --legacy-bundling=false

rm -f package-lock.json

# clean
npm cache verify
echo "npm :: removing node_modules"

rm -rf node_modules
#cd ../..



# install globablly (within the environment)
# npm cache verify
# if npm version is < 5 then use `npm cache clean`

# rm -f package-lock.json && npm install

echo " ~~~~~~  npm install -g @angular/cli@latest - installs the latest version  ~~~~~~ "
npm install -g @angular/cli@latest
npm install --save-dev @angular-devkit/build-angular
npm update
ng update @angular/cli @angular/core
npm install --dev

# unmet dependencies 
echo "Installing unmet dependencies"
# npm install --save @angular/cdk@latest
# npm install --save @angular/animations@latest
# npm install --save @angular/common@latest
# npm install --save @angular/core@latest
# forms breaks it? 
# npm install --save @angular/forms@latest
# npm install --save @angular/rxjs@latest
# npm install --save @angular/flex-layout@latest
# npm install --save @angular-devkit/schematics/tasks@latest
# ng-bootstrap
# npm install --save @ng-bootstrap/ng-bootstrap
# Angular Material
# npm install --save @angular/material

# npm install --save
# npm install --save @angular/core@
# npm install --save @angular/http@
# npm install --save rxjs@latest
# npm install --save jquery@latest
# npm install --save popper@latest

# npm ERR! peer dep missing: @angular/common@>=2.0.0 <6.0.0, required by angular-in-memory-web-api@0.5.4
# npm ERR! peer dep missing: @angular/core@>=2.0.0 <6.0.0, required by angular-in-memory-web-api@0.5.4
# npm ERR! peer dep missing: @angular/http@>=2.0.0 <6.0.0, required by angular-in-memory-web-api@0.5.4
# npm ERR! peer dep missing: rxjs@^5.1.0, required by angular-in-memory-web-api@0.5.4
# npm ERR! peer dep missing: jquery@1.9.1 - 3, required by bootstrap@4.3.1
# npm ERR! peer dep missing: popper.js@^1.14.7, required by bootstrap@4.3.1
# npm ERR! peer dep missing: rxjs@^5.1.0, required by angular-in-memory-web-api@0.5.4


# npm install --save-dev @angular-devkit/build-angular
## npm install --save-dev @angular-devkit/build-angular

# update the node package to be on the same cli as the core

npm update
ng update @angular/cli @angular/core
ng audit fix --force

#verify dependencies are without error
ng --version








# unmet dependencies
#@angular/animations@^7.2.10
#├── UNMET DEPENDENCY @angular/cdk@^7.3.5
#├── UNMET DEPENDENCY @angular/common@^7.2.10
#├── UNMET DEPENDENCY @angular/core@^7.2.10
#├── UNMET DEPENDENCY @angular/forms@^7.2.10
#└── UNMET DEPENDENCY rxjs@^6.4.0

# https://www.techiediaries.com/django-angular-tutorial/#Fixing_Hot_Code_Reloadnp
#npm install webpack-bundle-tracker --save


# Slightly different than the above statement - not sure why, gives you theme options, etc.
### ng add @angular/material


echo " ~~~~~~   ng build... ~~~~~~"

# ng build command writes generated build artifacts to the output folder (/dist)
## ng build
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
