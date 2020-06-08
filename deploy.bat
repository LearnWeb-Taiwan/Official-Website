call npm run build
cd ".\dist\"
call git init
call git add -A
call git commit -m 'deploy'
call git push -f https://github.com/LearnWeb-Taiwan/Official-Website.git master:gh-pages
pause