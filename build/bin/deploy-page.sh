rm -rf ./examples/dist;
mkdir ./examples/dist;

cd ./examples/dist;
git init;
git remote add try-ui git@github.com:iyanghong/try-ui.git;
git pull try-ui page;
git checkout page;
git rm -r *;

npm run build:example;


## 由于GitHub Page不支持伪静态，即不支持vue-router的history模式。所以复制index.html文件为404.html，让GitHub Page找不到的时候自动重定向至404.html
cp ./index.html ./404.html;

git add . && git add . && git commit -m "update page";

git push try-ui page;
