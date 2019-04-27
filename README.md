# aa

front:angular,bootstrap,easyu,

## step

### 1. pre

- from `https://github.com/332557712/cc`
- alter `https://github.com/chainly/cc`
- failed for `easyui` and out of date
- nwo(2019-04-27 12:49:01) `https://github.com/chainly/cc`

### 2. env version

```text
anaconda Command line client (version 1.7.2)
conda 4.6.14
Python 3.6.4 :: Anaconda, Inc.
pip 19.0.3 from d:\programdata\anaconda3\lib\site-packages\pip (python 3.6)
VS code 1.33.1

$ node -v   v10.13.0
$ npm -v    6.4.1
$ yarn -v   1.15.2
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 7.3.8
Node: 10.13.0
OS: win32 x64
Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.13.8
@angular-devkit/core         7.3.8
@angular-devkit/schematics   7.3.8
@schematics/angular          7.3.8
@schematics/update           0.13.8
rxjs                         6.3.3
typescript                   3.2.4


```

#### base

    # git
    #

#### anconda

    # install
    https://www.anaconda.com/distribution/
    ## window
    https://repo.anaconda.com/archive/Anaconda3-2019.03-Windows-x86_64.exe
    path: add D:\ProgramData\Anaconda3;D:\ProgramData\Anaconda3\Scripts;
    ## linux
    https://repo.anaconda.com/archive/Anaconda3-2019.03-Linux-x86_64.sh

    # env
    ## linux
    conda create --name python36 python=3.6
    echo "conda activate python36" >> ~/.bash_profile
    ## windows
    Environment -> creat -> python36 and choos python3.6
    terminal.integrated.shell.windows = "D:\Program Files\Git\bin\bash.exe"

    # VS code
    @TODO for extensions

#### nodejs

    # install
    conda install nodejs
    # yarn
    npm i -g yarn
    # [options]win
    yarn add global --production windows-build-tools

#### angular.ng

    yarn add global @angular/cli
    # windows
    cd /g/gitworkspace/
    git clone git@github.com:chainly/aa.git
    cd aa

## angular.project

### crete project

    # package manage
    # package-lock.json found ==> rm it and use `yarn` instand of `npm`

    ## create
    ng new aa

    ## css
    yarn add bootstrap
    add `"node_modules/bootstrap/dist/css/bootstrap.min.css"` to `angular.json.styles`

    ## js
    ### https://github.com/ng-bootstrap/ng-bootstrap
    yarn add @ng-bootstrap/ng-bootstrap
    ### http://www.jeasyui.net/angular
    yarn add ng-easyui

    ## icon

    ## start dev
    ## goto http://127.0.0.1:4200/
    ng serve

    ## push
    git remote -v
    git remote add  origin git@github.com:chainly/aa.git
    # There is no tracking information for the current branch.
    git branch --set-upstream-to=origin/master master
    # fatal: refusing to merge unrelated histories
    git pull --ff-only --allow-unrelated-histories
    # fatal: Not possible to fast-forward, aborting.
    # commit local firstly
    git add .
    git commit -m "save local to unrelated-histories merge"
    # merge
