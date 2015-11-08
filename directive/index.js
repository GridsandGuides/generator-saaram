'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
 
var OnepageGenerator = yeoman.generators.Base.extend({
	controller: function (fileName,directiveName) {
    this.fs.copyTpl(
          this.templatePath('_directive.js'),
          this.destinationPath('public/app/assets/directives/' + fileName + '.js'),
          { directiveName: directiveName }
        );
  }
});
 
module.exports = OnepageGenerator;