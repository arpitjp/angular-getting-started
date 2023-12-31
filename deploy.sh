#!/usr/bin/env sh

# abort on errors
set -e

# build
<<<<<<< HEAD
ng build --base-href="/angular-getting-started/"
=======
ng build
>>>>>>> 97deb4af567e8c1160e4ce64b9e9b3f281a8f3c5

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit --allow-empty -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/arpitjp/angular-getting-started.git main:gh-pages

cd -