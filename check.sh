#!/bin/bash


source "venv/bin/activate"


echo "$pwd"
npm ls --depth 0

git status
