#!/bin/bash
function git.branch {
  	br=`git branch | grep "*"`
}
git.branch
git pull origin ${br/* /}:${br/* /}
yarn d
git add -A
echo -n "enter git message:" 
read name
git commit -m 'deploy '${name}' on '${br/* /}' branch'
git push origin ${br/* /}