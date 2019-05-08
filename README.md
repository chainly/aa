# aa

front:angular,bootstrap,easyu,

## step

### 1. pre

- from `https://github.com/332557712/cc`
- alter `https://github.com/chainly/cc`
- failed for `easyui` and out of date
- now(2019-04-27 12:49:01) `https://github.com/chainly/aa`

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
    settings ==>
    terminal.integrated.shellArgs.windows
    {
    "python.pythonPath": "D:\\ProgramData\\Anaconda3",
    "terminal.integrated.shell.windows": "D:\\Program Files\\Git\\bin\\bash.exe",
    "terminal.integrated.shellArgs.windows": ["--login", "-i"]
    }

    # VS code
    ## mark
    replace regex: (.*) ==> $1
    ## extensions
    @TODO: for vs code file

#### nodejs

    # install
    conda install nodejs
    # yarn
    npm i -g yarn
    # [options and suggest for some potenial error] windows
    # **run as admin**
    yarn add global --production windows-build-tools

#### angular.ng

    yarn add @angular/cli
    # windows
    add path E:\workspace\vs\t1\aa\node_modules\.bin

## angular.project

### install and run aa

    git clone git@github.com:chainly/aa.git
    cd aa
    yarn install
    ng build
    # nginx
    @TODO: mv https://github.com/chainly/cc to here

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
    ### https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
    yarn add font-awesome
    ### and https://www.iconfont.cn/

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
    # pull and *compare and fix conflicts* to merge
    git pull --allow-unrelated-histories
    # push
    git commit -m "merge remote git@github.com:chainly/aa.git"
    git push

### all of first

    # copy
    ## error-page
    ## login
    ## main
    ## business-shared
    ## business-services
    ## environments
    ## assets
    ## index.html
    ## app-*

    # install module
    yarn add rxjs-compat
    yarn add @angular/http
    ## replace `yarn add ng2-img-cropper` with
    ## https://github.com/web-dave/ngx-img-cropper
    yarn add ngx-img-cropper
    yarn add qrious
    ## "@angular/core/core"' has no exported member xx
    ## `@angular/core.xx` move to `@angular/animations.xx`
    ## checkwith https://angular.io/api
    yarn add @angular/animations
    ## https://stackoverflow.com/questions/54491147/error-while-starting-my-project-after-running-ng-serve
    ## curret downgrade, change to `"rxjs-compat": "6.3.3"`
    yarn install rxjs-compat
    ## Non-abstract class 'DatepickerI18n' does not implement inherited abstract member 'getDayAriaLabel' from class 'NgbDatepickerI18n'.
    ## https://github.com/ng-bootstrap/ng-bootstrap/issues/2362#issuecomment-386778183

### entry

    cd src/app
    @XTODO fix this!!! ==> `"baseUrl" maybe should set "./src"` and `paths relate to it` wiil get it to work, it origin to be `"./"` , but my is not work, I don't know why!
    # add @app directive to absolution import
    ## ref: https://stackoverflow.com/q/34614818/6493535
    ## more: http://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping
    ## add `"paths": { "@app/*": ["app/*"] }` to `tsconfig.json` and use like `import { PageNotFoundComponent } from '@app/error-page/page-not-found.component';`
    # cp app-routing.module.ts
    # comment out app --> MainModule
    # cp app.component.ts

### login

    ng new
    # for cors with cookies
    # @TODO: use token
    - [ ] add `withCredentials: true` to all `HttpService`.method
    # more ref: https://github.com/chainly/cc
    # @TODO: merge to here

### logout

    # more ref: https://github.com/chainly/cc
    # @TODO: merge to here
    # @TODO: reprsent as `LOGOUT<span><icro>

### menu

> spilt main.component.html into top-menu and side-menu

    # menu
    #ng generate component menu

    ## about **`MODULE`**: to connect module and component
    ### for import routing and declare component
    ng generate module menu
    ### for routing test
    ng generate module menu-routing

    ## about **`ROUTING`**: config to and follow RouterModule
    ### 0. complile
    ### 1. start from `AppModule.bootstrap: component
    ### 2. load `import Module and component` from `Module` (in circle)
    ### 3. find tag and replace with component
    ### 4. <router-outlet></router-outlet> use route for Route.children(must contain in thisComponentForPathxx'html else not palce for subrouting to show)
    @NgModule({
    // https://angular.io/api/router/RouterModule
    // .forRoot just like set root, only one
    // .forChild: down side
    // .forChild: (in circle)
    imports: [
        RouterModule.forChild([
            // https://angular.io/api/router/Route#properties
            {
                "path", 'pathx',
                "component" thisComponentForPathxx,
                "children": [  // subrouting
                    { path: 'pathxxx', component: componentxxx},  // ./pathx/pathxxx
                    { path: 'pathyyy', loadChildren: 'Module path' },  // other contain RouterModule Module's path
                ] : Routes  // Routes object
            },
            { path: 'pathxxx', component: componentxxx}, // ./pathxxx
        )
    ],
    // up side
    exports: [
        RouterModule
    ]
    })

    cd menu
    # @TODO: find args to auto add component to local module
    # top-menu
    ng generate component top-menu
    # side-menu
    ng generate component side-menu

    # for **`CSS/SCSS`**:
    ## for define css
    # scss info: https://sass-lang.com/documentation/syntax
    ## for `Error: Failed to find xx.scss`
    ### https://www.cnblogs.com/wangzhichao/p/7904320.html
    ### https://github.com/angular/angular-cli/issues/12746#issuecomment-433337619
    ### **maybe contained or not required! for angular7**
    yarn add node-sass
    yarn add sass-loader
    # use scss: https://stackoverflow.com/a/39816365/6493535
    ng config schematics.@schematics/angular:component.styleext scss

### dependencies warning

```text
[2/4] Fetching packages...
warning Pattern ["sass-loader@^7.1.0"] is trying to unpack in the same destination "C:\\Users\\COOl\\AppData\\Local\\Yarn\\Cache\\v4\\npm-sass-loader-7.1.0-16fd5138cb8b424bf8a759528a1972d72aad069d\\node_modules\\sass-loader" as pattern ["sass-loader@7.1.0"]. This could result in non-deterministic behavior, skipping.
info fsevents@1.2.8: The platform "win32" is incompatible with this module.
info "fsevents@1.2.8" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning " > bootstrap@4.3.1" has unmet peer dependency "jquery@1.9.1 - 3".
warning " > bootstrap@4.3.1" has unmet peer dependency "popper.js@^1.14.7".
warning " > ng2-img-cropper@0.9.0" has incorrect peer dependency "@angular/common@^4.0.0".
warning " > ng2-img-cropper@0.9.0" has incorrect peer dependency "@angular/compiler@^4.0.0".
warning " > ng2-img-cropper@0.9.0" has incorrect peer dependency "@angular/core@^4.0.0".
warning " > sass-loader@7.1.0" has unmet peer dependency "webpack@^3.0.0 || ^4.0.0".
```

### Q&A

```text
1. Can't bind to 'NgClass' since it isn't a known property of 'button'.
    ref: https://angular.io/api/common/NgClass#description
    to use it you have to import CommonModule in module

2. not import MenuRoutingModule in MenuModule cause
- aa\others\errors\127.0.0.1-1556546400732.log
- no subrouting

3. <router-outlet></router-outlet> use route for Route.children(must contain in thisComponentForPathxx'html else not place for subrouting to show)

4. pass
```

### angular doc

  [./docs/README.md](./docs/README.md)

### map

    main.ts bootstrapModule(AppModule)
    app.module.ts bootstrap: [ AppComponent ] and AppRoutingModule
        app.component.ts.template
            <router-outlet></router-outlet> ==> loadChildren/children
            <selector1></selector1> ==> Component
            ...
        app-routing Routes
            path ==> Component :goto Component
            path ==> loadChildren/children show in <router-outlet></router-outlet> :goto xx.module.ts

### TODO

- [ ] main function
  - [ ] add `withCredentials: true` to all `HttpService`.method
  - [X] user login/logout with cors cookie set
  - [X] user info
  - [X] user list
    - [X] get by HttpPaginationComponent
    - [ ] read detail of it
    - [ ] replace with easyui table
  - [X] user add
  - [ ] easyui
  - [ ] as a service and component
  - [ ]
  - [ ]
- [X] serve as nginx static
- [X] https
- [ ] replace cookie with use token or as part of data or something else
  - [ ] <https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3>