# josegLEGO - Landing Page

This a personal _"Handmade"_ landing page build with HTML, CSS & JavaScript. It's based on Bootstrap 3, Sass & jQuery with some thirds libs. I prefer AngularJs, it's my normal tool. But you don't need a laser gun to kill a mosquito, do you? 

## External Requirements
It has a lot of requirements, but are imported with NPM & Bower. So, you just need to install them through these apps. Here you can find the Instructions Manual of their official pages.

- [npm]
- [Sass]
- [Bower]

## Get it 
### You can clone it
``` sh
$ git clone git@github.com:joseglego/joseglego.github.io.git
```

## You can download it 
1. Go to [josegLEGO-repo]
2. Click on `Clone or Download`
3. Finally, click `Download ZIP`

## Internal Requirements
### Install
``` sh
$ npm install
$ bower install
```

### Copy images
Why? I'm doing this because these are many images & the template. So, you wont require my images. So, You can copy if you want. But, the idea is you can use your owns. I prefer to copy them because I don't want to duplicate same images without advantage to other person and include it on the repo.

``` sh
$ cp assets/images/ app/assets/images
```

## Start server
This app works with a npm server (Browser Sync) and watcher over important files. It re-evaluate the changes on `index.html`, `/app/assets/scss/*`, `/app/styles/*`, `/app/assets/scripts/*`, `/app/views/*`, and generated files (in case of `.scss` to `.css`) and reload the browser.


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
### It's ordered by use, just for instructional purpose

- root-folder/                     # In my case is joseglego.github.io folder. You can rename it.
  # Documentation file used in github to explain project and all stuff related to it.
  - README.md                      # This document
  
  # Where the magic happens <3
  # It's where you can find, edit and build your webpage. Basically, you need to edit the index.html 
  # Add your images in assets/images. Edit styles in scss/main.scss and scripts on scripts
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
    - index.html                   # Source page. 
    - views/                       # HTML files to import as views

  # package.json is required by npm. And it defines developments requirements. (for gulp)
  # bower.json is required by bower. And it defines Web Page requirements.
  # gulpfile.js is the task automator file uses to generated and do boring stuff related to this page.
  # In this files are all the tasks which can help you! 
  - package.json                   # Requirements file
  - bower.json                     # Requirements file
  - gulpfile.js                    # Task Manager file

  # bower_components are vendor libs used by the web page
  # node_modules are vendor libs used by gulo to help you with the boring stuff
  - bower_components/              # Vendor Libs
  - node_modules/                  # Vendor Libs

  # The web page. Minified and ready to serve it (@GitHubPages) or just copy and paste theses files on a Apache Server
  - index.html                     # Generated main file (to serve in GitHubPages)
  - views/                         # Generated views files (to serve in GitHubPages)
  - assets/                        # Generated files production (to serve in GitHubPages)
  - favicon.ico                    # Project favicon

```


## Third Libs

If you wanna use only a specific feature found in this page. You can check the third libs we are using and go for it:

- [jquery]
- [Bootstrap]
- [jQuery Backstretch]
- [jQuery matchHeight]
- [jQuery Validation]
- [Sweet Alert]
- [Animate CSS]
- [Smooth Scroll]
- [Font Awesome]
- [Slick Carousel]

## Extra Hint

You can find more awesome images on [Unsplash]

[npm]: <https://docs.npmjs.com/getting-started/installing-node>
[Sass]: <http://sass-lang.com/install>
[Bower]: <https://bower.io/#install-bower>
[josegLEGO-repo]: <https://github.com/joseglego/joseglego.github.io>
[jquery]: <https://jquery.com/>
[Bootstrap]: <http://getbootstrap.com/>
[jQuery Backstretch]: <https://github.com/srobbin/jquCery-backstretch>
[jQuery matchHeight]: <https://github.com/liabru/jquery-match-height>
[jQuery Validation]: <https://github.com/jzaefferer/jquery-validation>
[Sweet Alert]: <http://t4t5.github.io/sweetalert/>
[Animate CSS]: <https://daneden.github.io/animate.css/>
[Smooth Scroll]: <https://github.com/cferdinandi/smooth-scroll>
[Font Awesome]: <http://fontawesome.io/icons/>
[Slick Carousel]: <http://kenwheeler.github.io/slick/>
[Unsplash]: <https://unsplash.com/>
