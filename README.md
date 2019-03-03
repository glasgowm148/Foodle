# Foodle
> A responsive web application for finding deals within walking distance built using Django and Angular. 



"Where Deals Become Meals"™️
![](NOTES/header.png)

# Requirements

* Python 3+ !!
* NPM (Javascript package manager)

```
python -V
ngm help ngm
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

## Running locally

### Clone the directory to your local drive

```sh
git clone https://github.com/glasgowm148/Foodle_dev.git
cd Foodle_dev
```


### Installation

#### Mac OSX / Linux 
```sh
./config.sh             // config venv + npm 
./check.sh              // check dependencies + git status
code .                  // vscode command pallet > 
                        // 'Shell - install 'code' in command PATH'
```

#### Windows

```sh initial_win.sh
pip install virtualenv
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cd foodle/front-end 
npm install -g @angular/cli@latest
ng update @angular/cli @angular/core
ng build
cd ../..
python manage.py runserver
```
```sh
venv\Scripts\activate       // Ensure you are in your venv
npm ls --depth 0            // Ensures correct dependencies 
git status                  // Check the status of the branch
```



**or if sh is installed**
```sh
sh initial_win.sh
```

### Access via ::

http://127.0.0.1:8000

- admin / admin123
- user1 / example123

#### VSCode Tips

* Open the command pallet and type 'Shell - install 'code' in command PATH'
* Then you can just type
* `code .` from within Foodle_dev/ to open the project in vscode
* Command Pallet - > Python : Enable Linting 
* Get the material icons theme.


## Release History
* 0.0.2
    * shell scripts + backend tidy/customise. {settings/config}
* 0.0.1
    * fork angular-django


## Version Control (Git)

```sh
git status
```

Keep an eye on `git status.`

This tells you which files are modified / unstaged 

(stage files for commit using : `git add .`) 

Open a new branch for each [Project](https://github.com/glasgowm148/Foodle_dev/projects). 

```sh
git checkout -b myfeature dev
```

Several people can work on the same project - push/pull often when working in teams to avoid merge conflicts 

#### Pushing local changes to feature branch ¶
*Ensure you are in the correct branch at all times* 

After making the relevant additions to build the new features,


```sh
git status          // 
git fetch           // to pull changes from the remote branch. 
                    // Then compare changes & modify as needed.
git pull            // fetch + merge
git commit -a       //
git add .           // stage all files in ./ to be commited
git commit -m "x"   // x := commit message
git push            // push the new changes to git
```






