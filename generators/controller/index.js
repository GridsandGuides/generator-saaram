'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
 
var OnepageGenerator = yeoman.generators.Base.extend({
	controller: function (fileName,controllerName) {
    this.fs.copyTpl(
          this.templatePath('_controller.js'),
          this.destinationPath('app/assets/js/controllers/' + fileName + '.js'),
          { controllerName: controllerName }
        );
  }
});
 
module.exports = OnepageGenerator;