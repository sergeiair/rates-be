#!/bin/bash

cd ~/projects/rates-be
git stash
git pull origin master
rm -rf ~/projects/node/main.js
cp build/main.js ~/projects/node/
cd ~/projects/node/
forever stopall
forever start main.js


