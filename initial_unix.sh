#!/bin/bash
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

# update the node package to be on the same cli as the core
ng update @angular/cli @angular/core
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


echo "~~~~~~ manage.py runserver ~~~~~~"



# Run the python server - which is linked with angular via the REST framework. 
python manage.py runserver

echo "~~~~~~ All configured successfully. ~~~~~~"
echo "~~~~~~ Open a new tab and run ./check.sh ~~~~~~"


#WID=$(xprop -root | grep "_NET_ACTIVE_WINDOW(WINDOW)"| awk '{print $5}')
#xdotool windowfocus $WID
#xdotool key ctrl+shift+t
#wmctrl -i -a $WID
# This will auto determine the corresponding terminal and opens the tab accordingly.
# https://stackoverflow.com/questions/1188959/open-a-new-tab-in-gnome-terminal-using-command-line


# notes

#webpack-bundle-tracker@0.4.2-beta
#yarn add mjml@4.3.1
# mjml@4.3.1 -  the only framework that makes responsive-email easy