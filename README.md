# Foodle
> A responsive web application for finding deals within walking distance built using Django and Angular. 

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Intro Paragraph


![](NOTES/header.png)

## Installation

#### OS X & Linux:

##### Clone the directory to your local drive
```sh
git clone https://github.com/glasgowm148/Foodle.git
cd foodle
```

##### Set up the virtual environment using virtualenv
```sh
pip3 install virtualenv
virtualenv -p python3 $USER_local_env
pip3 install -r requirements.txt
. MYNAME_local_env/bin/activate
```
Note : Add your local env to .gitignore!


##### Install Angular cli
```sh
npm install -g @angular/cli
ng new foodle
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS    (.css )
cd foodle/
ng serve
```

###### You should now be able to access the angular front-end at localhost:4200


## Release History

* 0.0.1
    * Work in progress


## Version Control (Git)


Generally, we will create a new git branch for each new feature. This is a good practice because in the future if we further update the branch after some discussions, the pull request will be automatically updated. Let's create a new branch to make a very simple change to amend the readme.md file:

```
git checkout -b myfeature develop
```
After making the relevant additions to build the new features, we will just commit the new changes and checkout to the git develop branch:
```
git add .
git commit -m "myfeature info"
git checkout develop
```

#### Incorporating a finished feature on develop ¶

```
Switched to branch 'develop'
$ git merge --no-ff myfeature
Updating ea1b82a..05e9557
(Summary of changes)
$ git branch -d myfeature
Deleted branch myfeature (was 05e9557).
$ git push origin develop
```





