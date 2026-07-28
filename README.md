# Deploying

- `npm run build`
```bash
cd dist
git init 
git add -A
git commit --amend --no-edit

git push -f https://github.com/concotbog/concotbog.github.io.git master:main
```

## Picture updates
1. Add changes in `/public/pictures`, then copy the `pictures` folder to the root. Make sure the pictures are in `.webp` format in order to load faster and save space.