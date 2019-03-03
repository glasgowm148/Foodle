#!/bin/bash

if [[ "$OSTYPE" == "linux-gnu" ||  ]]; then
        # ...
        pip3.6 install virtualenv
        virtualenv -p python3.6 venv
        . venv/bin/activate
        pip3.6 install -r requirements.txt
elif [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac OSX
        pip3.6 install virtualenv
        virtualenv -p python3.6 venv
        . venv/bin/activate
        pip3.6 install -r requirements.txt
elif [[ "$OSTYPE" == "cygwin" ]]; then
        # POSIX compatibility layer and Linux environment emulation for Windows
elif [[ "$OSTYPE" == "msys" ]]; then
        # Lightweight shell and GNU utilities compiled for Windows (part of MinGW)
        pip install virtualenv
        python -m venv venv
        venv\Scripts\activate
        pip install -r requirements.txt
        
elif [[ "$OSTYPE" == "win32" ]]; then
        # I'm not sure this can happen.
elif [[ "$OSTYPE" == "freebsd"* ]]; then
        # ...
else
        # Unknown.
fi ## Source : https://stackoverflow.com/questions/394230/how-to-detect-the-os-from-a-bash-script


./config.sh


# Custom bash/sh script to enter into the correct directory. 
echo ""Moving into the foodle/front-end directory and verifying there is no previous install of npm""

# foodle - An app within the project, containing the Django Rest Framework views and URL routing
cd foodle/front-end

# install globablly (within the environment)
# npm cache verify
# if npm version is < 5 then use `npm cache clean`
echo "##### npm install -g @angular/cli@latest - installs the latest version #####"
npm install -g @angular/cli@latest

# update the node package to be on the same cli as the core
ng update @angular/cli @angular/core
# you can install npx and run npx ng <command> within
#  the local directory where npm install @angular/cli was run, 
# which will use the locally installed angular-cli.


# ng build command writes generated build artifacts to the output folder (/dist)
ng build
echo "##### npm installed successfully. #####"


# CD back into the home directory ./Foodle_dev
cd ../..


echo "##### manage.py runserver #####"

# Run the python server - which is linked with angular via the REST framework. 
python manage.py runserver

#webpack-bundle-tracker@0.4.2-beta
#yarn add mjml@4.3.1
# mjml@4.3.1 -  the only framework that makes responsive-email easy

# npm ls --depth 0
# Check all the correct dependencies are installed

git status

# rm -f package-lock.json && npm install

#  grep -rli 'angular_django_example' * | xargs -I@ sed -i 's/angular_django_example/anglular_djangod/g' @