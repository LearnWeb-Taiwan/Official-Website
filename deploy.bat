echo "start deploy"
    call npm run build
cd ".\dist\"
echo "init git file"
    call git init
    call git add -A
    call git commit -m 'deploy'
echo "deploying"
    call git push -f https://github.com/LearnWeb-Taiwan/Official-Website.git master:gh-pages
echo "deploy done"