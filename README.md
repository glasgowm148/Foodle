# Foodle
> A responsive web application for finding deals within walking distance built using Django and Angular. 



Intro Paragraph

![](NOTES/header.png)

# Requirements

* Python 3+ !!
* NPM


Check your python version with

```
python -V
```

# Folders

* angular_django
    * Django project and main settings.py 
* foodle
    * Our app within the project, containing the Django Rest Framework views and URL routing (urls.py)
    * /front-end/ : local npm install
    * static/templates : base.html, index.html, etc. 
    * static/dist : The compiled Angular app is here
* NOTES
    * Any general notes/loose files place here. 

Most of these files are local. Only the folders angular_django/ foodle/ and NOTES/ manage.py and a few system files (requirements.txt/lock files, etc) 
are synced on Git.

# Setup



## Clone the directory to your local drive

```sh
git clone https://github.com/glasgowm148/Foodle_dev.git
cd foodle
```


## Set up the virtual environment using virtualenv

#### Windows

```sh
pip install virtualenv
python -m venv name
name\Scripts\activate
pip install -r requirements.txt
./config.sh
```

#### On Mac OSX : Ensure the environment is py3.6
```sh
pip3.6 install virtualenv
virtualenv -p python3.6 venv
. venv/bin/activate
pip3.6 install -r requirements.txt
./config.sh
```

The config.sh file installs npm and launches manage.py runserver

### Giving you access to the front-end 

http://127.0.0.1:8000

#### Dummy logins (temp)

The database included in this repository contains two users. The following are their usernames and passwords, which you may use for testing:

- admin / admin123
- user1 / example123

#### VSCode Tips

If you're using vscode. Open the command pallet and type 'Shell - install 'code' in command PATH'

Then you can just type

`code .` from within Foodle_dev/ to open the project in vscode

Command Pallet - > Python : Enable Linting 

Get the material icons theme.


## Release History

* 0.0.1
    * Work in progress


## Version Control (Git)

```sh
git status
```

Always keep an eye on git status. This tells you which files aren't staged ('stage' using : `git add .`), and all other deviations your local files are from the last commit. 


```sh
git checkout -b myfeature dev
```

Create a new git branch for each new feature. This is a good practice because in the future if we further update the branch, the pull request will be automatically updated.



#### Incorporating a finished feature on develop ¶
After making the relevant additions to build the new features,

Use 
```sh
git fetch // to pull changes from the remote branch. You can then compare changes & modify as needed.
git pull // to fetch+merge
```


Once any conflicts are resolved, we can  commit the new changes and checkout to the git `dev` branch:
```sh
git add .
git commit -m "myfeature info"
git checkout dev
```








