#!/bin/bash
rm -rf dist
function git.branch {
  	br=`git branch | grep "*"`
}
git.branch
git pull origin ${br/* /}:${br/* /}
yarn build
git add -A
git commit -m 'deploy aboutMe on '${br/* /}' branch'
git push origin ${br/* /}