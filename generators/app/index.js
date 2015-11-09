'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');


 
var OnepageGenerator = yeoman.generators.Base.extend({
 // promptUser: function() {
 //        var done = this.async();
 
 //        // have Yeoman greet the user
 //        console.log(this.yeoman);
 
 //        var prompts = [{
 //            name: 'projectName',
 //            message: 'What is your Projects\'s name ?'
 //        },{
 //            name: 'appName',
 //            message: 'What is your app\'s name ?'
 //        }];
 
 //        this.prompt(prompts, function (props) {
 //            this.projectName = props.projectName;
 //            this.appName = props.appName;
   
 //            done();
 //        }.bind(this));
 //    },

    writing: function () {
        this.fs.copyTpl(
          this.templatePath('_index.html'),
          this.destinationPath('app/index.html')
          // { projectName: this.projectName }
        );

        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json')
        );

        this.fs.copyTpl(
          this.templatePath('_gruntfile.js'),
          this.destinationPath('Gruntfile.js')
        );

        this.fs.copyTpl(
          this.templatePath('_bower.json'),
          this.destinationPath('bower.json')
        );

        this.fs.copyTpl(
          this.templatePath('_app.js'),
          this.destinationPath('app/assets/js/app.js')
        );

        mkdirp('app/assets/js/controllers', function (err) {
            if (err) console.error(err)
                else console.log('pow!')
        });

        mkdirp('app/assets/js/directives', function (err) {
            if (err) console.error(err)
                else console.log('pow!')
        });

        mkdirp('app/assets/js/factories', function (err) {
            if (err) console.error(err)
                else console.log('pow!')
        });

        mkdirp('app/assets/js/filters', function (err) {
            if (err) console.error(err)
                else console.log('pow!')
        });

        mkdirp('app/assets/images', function (err) {
            if (err) console.error(err)
                else console.log('pow!')
        });

        mkdirp('app/assets/css', function (err) {
            if (err) console.error(err)
                else console.log('pow!')
        });

        mkdirp('app/templates', function (err) {
            if (err) console.error(err)
                else console.log('pow!')
        });
    }
});
 
module.exports = OnepageGenerator;



