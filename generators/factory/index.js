'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
 
var OnepageGenerator = yeoman.generators.Base.extend({
	controller: function (fileName,factoryName) {
    this.fs.copyTpl(
          this.templatePath('_factory.js'),
          this.destinationPath('app/assets/js/factories/' + fileName + '.js'),
          { factoryName: factoryName }
        );
  }
});
 
module.exports = OnepageGenerator;