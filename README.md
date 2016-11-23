# Starter Gulp ES6
Provide a ready-to-develop project to build a web application

The project is already configured with:
- [sass](http://sass-lang.com/)
- [gulp](http://gulpjs.com/) tasks
- es6 using [babel](https://babeljs.io/)
- [bower](https://bower.io/)
- [karma](https://karma-runner.github.io) / [jasmine](https://jasmine.github.io/)
- [travis](https://travis-ci.org/) integration
- [coveralls](https://coveralls.io/) integration

## Project installation

```
git clone git@github.com:dpellier/starter-gulp-es6.git
cd starter-gulp-es6
npm install
```

## Useable tasks

`gulp serve`: start a server with livereload, useful for dev

`gulp serve:dist`: start a server with the production version, useful for validation before deploying

`gulp build`: build the production version of the website

`gulp test`: execute the unit test suites

`gulp lint`: validate that your code follow the guideline rules for `js` and `scss`, please resolve every error/warning before submitting pull requests

`gulp`: print the above list, useful when you don't remind which task to use
