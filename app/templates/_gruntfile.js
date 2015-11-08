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
      watch: {
        scripts : {
          files: ['bower_components/*'],
          tasks: ['wiredep']
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