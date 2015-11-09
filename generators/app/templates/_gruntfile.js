module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    useminPrepare :{
        html : 'app/index.html',
        options:{
          dest:'build'
        }
      },
      wiredep: {
        task: {
          src: [
            'app/index.html',
          ]
        }
      },
      usemin:{
        html:['build/index.html']
      },
      copy:{
        task0:{
          src:'app/index.html',dest:'build/index.html'
        }
      },
      includeSource: {
        options: {
          basePath: 'app',
          baseUrl: '',
          templates : {
            js: '<script src="{filePath}"></script>',
            css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
          }
        },
        myTarget: {
          files: {
            'app/index.html' : 'app/index.html'
          }
        }
      },
      watch: {
        scripts : {
          files: ['bower_components/*'],
          tasks: ['wiredep']
        },
        source : {
          files: ['app/assets/js/**/*','app/assets/css/**/*'],
          tasks: ['includeSource']
        }
      } 
  });

grunt.registerTask('build', [
    'copy:task0',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'usemin'
    ]);
  grunt.registerTask('default', 'watch');
};