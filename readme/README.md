## Running locally


# Requirements

* Python 3+ !!
* NPM (Javascript package manager)

```
python -V
ngm help ngm
```

### Clone the directory to your local drive

```sh
git clone https://github.com/glasgowm148/Foodle_dev.git
cd Foodle_dev
```


### Installation

#### Mac OSX / Linux 
```sh
./sh/config.sh          // config venv + npm +
                        // check dependencies + git status +
                        // runserver

./sh/run.sh             // runs venv + git status + runserver

code .                  // "vscode command pallet > 
                        // Shell - install 'code' in command PATH"
```

#### Windows

**If sh is installed**
```sh
sh sh/win.sh
```

Commands used : 
```sh 
pip install virtualenv
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cd foodle/front-end 
npm install -g @angular/cli@latest
ng update @angular/cli @angular/core
npm install --save @ng-bootstrap/ng-bootstrap
ng build
cd ../..
python manage.py runserver
```
```sh
venv\Scripts\activate       // Ensure you are in your venv
npm ls --depth 0            // Ensures correct dependencies 
git status                  // Check the status of the branch
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

## NPM Commands
```
npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.
```
Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`          | Start the development server
`$ npm test`           | Lint, validate deps & run tests
`$ npm run build`      | Compile all files into `dist/`
`$ npm run create`     | Generate a scaffold file
`$ npm run inspect`    | Inspect the bundle's dependencies


## Version Control (Git)

Open a new branch for each [Project](https://github.com/glasgowm148/Foodle_dev/projects). 
```sh
git branch myfeature 
git checkout myfeature

or

git checkout -b myfeature  // creates a new branch and moves into it
```

Workflow

```sh
git status          // See which files you have modified.
                    // git add <file> - stage the files you want to save

git stash           // saves your local modifications away and reverts the working
                    // directory to match the HEAD commit

git add .           // stage all files in ./ to be commited

git fetch           // to pull changes from the remote branch. 
                    // Then compare changes & modify as needed.

git pull            // fetch + merge

git commit -a       // Includes all currently changed files in this commit. 
                    // Keep in mind, however, that untracked (new) files are not included.

git commit --amend  // Rewrites the very last {local} commit 

git commit -m "x"   // x := commit message

git push            // push the new changes to git
```


#### Pushing local changes to feature branch ¶
*Ensure you are in the correct branch & venv at all times* 


```sh
git status
git fetch
git add . 
git pull
git commit -m "mynewfeatures" 
git checkout -b myfeature dev
```

Several people can work on the same project - push/pull often when working in teams to avoid merge conflicts 

References:

Nathan:
For a number of the bootstrap elements, this tutorial was used to understand and start implementing the basics of them
https://www.youtube.com/watch?v=9cKsq14Kfsw


Hassan:
Used to assist in implementing the dropdown on the submit form
https://stackovverflow.com/questions/31130706/dropdown-in-django-model

Used in implementing the sign in with google elements
https://developers.google.com/identity/sign-in/web/sign-in

Used as a base for styling the submit/login/register pages
https://bootsnipp.com/snippets/dldxB


Greg:
When researching how to use Google Maps API the following tutorials were very informative
https://developers.google.com/maps/documentation/javascript/tutorial
https://developers.google.com/maps/documentation/geocoding/intro
https://developers.google.com/maps/documentation/geolocation/intro
https://developers.google.com/maps/documentation/javascript/directions


Mark:



Finn: