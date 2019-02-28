# Foodle
## Angular Branch


# Mark

Clone this directory and CD into it. 

```
git clone https://github.com/glasgowm148/Foodle.git
cd foodle
```

Then issue the following commands

installs the virtualenv
```pip3 install virtualenv```

sets up a virtualenv called 'MYNAME_local_env'
```virtualenv -p python3 MYNAME_local_env```

installs requirements 'django'
```pip3 install -r requirements.txt```

activates virtual environment
```. MYNAME_local_env/bin/activate```

Generally, we will create a new git branch for each new feature. This is a good practice because in the future if we further update the branch after some discussions, the pull request will be automatically updated. Let's create a new branch to make a very simple change to amend the readme.md file:

```
git checkout -b newfeature
```
After making the relevant additions to build the new features, we will just commit the new changes and checkout to the git master branch:
```
git add .
git commit -m "information added in readme"
git checkout master
```
At this point, we will push the branch to the remote repository. 
For this we will first check the branch name with the new feature as well as the git remote repository aliases. 
Then we will push the changes using 

```git push [git-remote-alias] [branch-name]:
git branch
* master
readme
$ git remote -v
origin  git@github.com:[forked-repo-owner-username]/[repo-name].git (fetch)
origin  git@github.com:[forked-repo-owner-username]/[repo-name].git (push)
$ git push origin readme
```
## Setting up Angular

npm install -g @angular/cli
ng new foodle
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS    (.css )
cd foodle/
ng serve

You should now be able to access the angular front-end

http://localhost:4200

