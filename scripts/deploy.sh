#!/usr/bin/env bash

npm run build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -M main &&
git remote add origin git@github.com:Lisbeth1128/account-2-website.git &&
git push -u origin main -f
cd -