#!/bin/bash

echo " ~~~~~~ Current working directory :: ~~~~~~ "
echo "$(pwd)"

echo " ~~~~~~ Dependecy Check ::  ~~~~~~ "

npm ls --depth 0

echo " ~~~~~~ Git Stauts :: ~~~~~~ "
git status

echo " ~~~~~~ Spawning venv in subshell ~~~~~~ "

script_dir=`dirname $0`
cd $script_dir
/bin/bash -c ". ../venv/bin/activate; exec /bin/bash -i"