![](foodle/static/images/sliders/slide1.png)

# Foodle
> A responsive web application for finding deals within walking distance built using Django and Angular. 

"Where Deals Become Meals"™️



[![NPM Version][npm-image]][npm-url]

[![Build Status] [travis-image]][travis-url]

[![Downloads Stats] [npm-downloads]][npm-url]

[![PythonAnywhere] [https://img.shields.io/badge/demo-blue.svg]](https://www.foodle.cc)




## Getting Started

To deploy a local instance of foodle simply clone into a python 3+ virtual environment and run 
```sh
python manage.py runserver
```

### Installing

We have created install, build, test and clean scripts which do most of the work which can be ran with. 

```sh
./readme/install.sh
```

```sh
./readme/win.bat
```

Detailed instructions, full descriptions and commands used available in [readme/README.md](/readme/README.md)

## Running the tests

```py
python manage.py test
```





### Resources Used / References:

#### Our Work

* [HTML Templates](foodle/templates)
* [Angular /app](foodle/front-end/src/app) - where the angular html/css/ts lives
* [foodle](foodle) - Django home. foodle python files are located here

##### Nathan: 
For a number of the bootstrap elements, this tutorial was used to understand and start implementing the basics of them https://www.youtube.com/watch?v=9cKsq14Kfsw

##### Hassan: 
Used to assist in implementing the dropdown on the submit form https://stackovverflow.com/questions/31130706/dropdown-in-django-model

Used in implementing the sign in with google elements https://developers.google.com/identity/sign-in/web/sign-in

Used as a base for styling the submit/login/register pages https://bootsnipp.com/snippets/dldxB

##### Greg: 
When researching how to use Google Maps API the following tutorials were very informative https://developers.google.com/maps/documentation/javascript/tutorial https://developers.google.com/maps/documentation/geocoding/intro https://developers.google.com/maps/documentation/geolocation/intro https://developers.google.com/maps/documentation/javascript/directions

##### Mark:


* [MicroBlog](angular-django-example) - used as base for project skeleton.
* [Angular Materials](https://material.angular.io) - used in angular buttons
* [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
* [Setting up API](https://www.metaltoad.com/blog/angular-api-calls-django-part-2-building-micro-blog-app) - Django&Angular connection

##### Finn: 

Adapted for use: https://wsvincent.com/django-contact-form/

Also this: https://docs.djangoproject.com/en/2.1/topics/email/

Adapted to create FAQ page: https://github.com/CodyHouse/faq-template

SMTP email client: https://app.mailjet.com/