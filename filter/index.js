'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
 
var OnepageGenerator = yeoman.generators.Base.extend({
	controller: function (fileName,filterName) {
    this.fs.copyTpl(
          this.templatePath('_filter.js'),
          this.destinationPath('public/app/assets/filters/' + fileName + '.js'),
          { filterName: filterName }
        );
  }
});
 
module.exports = OnepageGenerator;