# Info III website


## Setup

First install node version manager (nvm), then install and use the stable
version,

```bash
nvm install stable
nvm use stable
```

then install gatsby,

```bash
npm install -g gatsby
```

then clone the repo, within the repo folder,

```bash
yarn install
```

then to see a development version of the website,

```bash
# from the repo
gatsby develop
```

## Contribute

Make sure you clone the repo, and then, make sure you're in the master branch
and have the latest version,

```bash
git branch # to see which branch you're in
git checkout source
git pull
```

then before you start commiting changes,

```bash
git chechout -b name-your-branch
```

now make your changes (add new pages etc) and then

```bash
git add . # or
git add path/to/your/files.md
```

make sure all looks good and commit

```bash
git status
git commit -m "Describe your changes"
```

then push your changes and make a pull request from the web interface,

```bash
git push
```

## Deploy your changes

Make sure you want to make your changes public, and then

```bash
# from the repo
npm run deploy
```

and then everything should be available shortly.

## Structure

The `pages` folder contains the main pages, the `pages/classes` folder should
contain class related content, and the `pages/blog` folder, should contain blog
entries about teaching and technology.
