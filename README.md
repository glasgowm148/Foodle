# Foodle
> A responsive web application for finding deals within walking distance built using Django and Angular. 
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]
[![Live demo](https://img.shields.io/badge/demo-blue.svg)](urlhere)


"Where Deals Become Meals"™️
![](NOTES/header.png)

# Running Locally

More info in readme/README.md

# Directory Structure

Foodle_dev/ :: main directory

* /angular_django/  :: local to your install. Django project and main settings.py  
    * __ init __.py
    * settings.py
    * urls.py
    * wsgi.py :: not needed on pythonanywhere 


* /foodle/ :: Our app within the project, containing the Django Rest Framework views and URL routing (urls.py)
    * migrations ::
    * static :: Main site build
        * front-end :: local package.json requirements (npm install)
    * templates :: base.html // index.html // etc
    * dist :: Compiled Angular App
    * Main Django app files apps.py, models,py, etc...

* NOTES/ :: misc. files

* readme/ :: shell configuration scripts (unix) 

* venv/ :: local environment (your install)

* Misc files

    * .gitignore :: Files to be ignored from git push

    * manage.py :: main python executable 

    * Pipfile :: pipenv dependencies? remove ? 

    * requirements.txt :: requirements set by django









