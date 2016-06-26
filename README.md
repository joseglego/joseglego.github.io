# josegLEGO - Landing Page

This a personal lading page with HTML, CSS & JavaScript. It's based on Bootstrap 3, Sass & jQuery with some thirds libs.

## External Requirements
We have a lot of requirements, but are imported with NPM & Bower. So, you just need to install these. Here you can find the Instructions Manual of their official pages.

- [npm]
- [Sass]
- [Bower]

## Get it 
### You can clone it
``` sh
$ git clone git@github.com:joseglego/joseglego.github.io.git
```

## You can download it 
Go to [josegLEGO-repo], clic on `Clone or Download` and finally clic `Downloaz ZIP`


## Install internal requirements
``` sh
$ npm install
$ bower install
```

## Start server
This app works with a npm server. It re-evaluate the changes on `index.html`, `/app/assets/scss/*`, `/app/styles/*`, `/app/assets/scripts/*`, `/app/vews/*`, and generated files (in case of `.scss` to `.css`) and reload the browser.


``` sh
$ gulp serve                   # You must be on the root folder of the repository
```

## Other Gulps Tasks
### Generated Minified Files to Server
It generate the minified files (`.html`, `.css` & `.js`)  and build a production version in the `dist/` folder. So, you can move the content of this folder to your server and it's ready as your page.

``` sh
$ gulp build:dist                   # You must be on the root folder of the repository
```


### Generated Minified Files to GitHubPages
It reuse the previous task. But it moves all the files to root folder and can works as a GitHubPage. You just neeed to commit the changes and push to master. 

``` sh
$ gulp build:ghp                   # You must be on the root folder of the repository
```

## File Structure
``` sh
- root-folder/                     # In my case is joseglego.github.io folder. You can rename it.
  - app/                           # The source folder
    - assets/                      # The files folder (more order)
      - files/                     # Downloadable files (in my case my Resume)
      - images/                    # Used images 
      - scripts/                   # JavaScript Files
        - main.js                  # The javascript with all custom js of the page.
      - scss/                      # Sass files
        - elements/                # Defined and customed elements in the projects (modal, section, etc)
        - main.scss                # Main Sass file
        - modules/                 # Base of Sass
        - partials/                # Specific Sass by section of the page
      - styles/                    # CSS files
        main.css                   # All custom style of the page (generated based on Sass folder)
    - bower_components/            # Vendor Libs
    - index.html                   # Source page. 
    - views/                       # HTML files to import as views
  - assets/                        # Generated files production (to serve in GitHubPages)
  - bower.json                     # Requirements file
  - favicon.ico                    # Project favicon
  - gulpfile.js                    # Task Manager file
  - index.html                     # Generated main file (to serve in GitHubPages)
  - node_modules/                  # Vendor Libs
  - package.json                   # Requirements file
  - README.md                      # This document
  - views/                         # Generated views files (to serve in GitHubPages)
```


## Third Libs

If you wanna use only a specific feature found in this page. You can check the third libs we are using and go for it:

- [Bootstrap]
- [Backstretch]
- [jquery matchHeight]
- [jQuery Validation]
- [Sweet Alert]
- [Animate CSS]
- [Smooth Scroll]

[npm]: <https://docs.npmjs.com/getting-started/installing-node>
[Sass]: <http://sass-lang.com/install>
[Bower]: <https://bower.io/#install-bower>
[josegLEGO-repo]: <https://github.com/joseglego/joseglego.github.io>
[Bootstrap]: <http://getbootstrap.com/>
[Backstretch]: <https://github.com/srobbin/jquery-backstretch>
[jQuery matchHeight]: <https://github.com/liabru/jquery-match-height>
[jQuery Validation]: <https://github.com/jzaefferer/jquery-validation>
[Sweet Alert]: <http://t4t5.github.io/sweetalert/>
[Animate CSS]: <https://daneden.github.io/animate.css/>
[Smooth Scroll]: <https://github.com/cferdinandi/smooth-scroll>
