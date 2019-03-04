#!/bin/bash

# Mark Glasgow

# Run file for PythonAnywhere

fish
cd .
chmod +x ./venv/bin/activate.fish
. venv/bin/activate.fish
git status
cd foodle/front-end 
ng new codelyzer
ng build
ng test
ng lint 
cd ../..
