#!/bin/bash
function git.branch {
  	br=`git branch | grep "*"`
}
git.branch
git pull origin ${br/* /}:${br/* /}
npm run d
git add -A
echo -n "输入提交内容: "
read name
git commit -m 'deploy '${name}' on '${br/* /}' branch'
git push origin ${br/* /}