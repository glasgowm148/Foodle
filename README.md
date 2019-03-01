# Foodle
> A responsive web application for finding deals within walking distance built using Django and Angular. 

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Intro Paragraph

![](header.png)

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

Windows:

```sh
edit autoexec.bat
```

## Version Control (Git)

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

Add your local env to .gitignore!


At this point, we will push the branch to the remote repository. 
For this we will first check the branch name with the new feature as well as the git remote repository aliases. 
Then we will push the changes using 

```
git push [git-remote-alias] [branch-name]:
git branch
* master
readme
$ git remote -v
origin  git@github.com:[forked-repo-owner-username]/[repo-name].git (fetch)
origin  git@github.com:[forked-repo-owner-username]/[repo-name].git (push)
$ git push origin readme
```

_For more examples and usage, please refer to the [Wiki][wiki]._



## Release History

* 0.1.0
    * The first proper release
    * CHANGE: Rename `foo()` to `bar()`
* 0.0.1
    * Work in progress

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
