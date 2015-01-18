module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    concat: {
  options: {
    // define a string to put between each file in the concatenated output
    separator: ';'
  },
  dist: {
    // the files to concatenate
    src: ['src/**/*.js'],
    // the location of the resulting JS file
    dest: 'dist/<%= pkg.name %>.js'
  },
  calc: {
      src: ['spec-fragments/require-calculator.js', 'spec-fragments/calculator-test-only.js'],
      dest: 'spec/calculator-spec.js',
    },
   dist: {
      src: ['spec-fragments/**/*.js'],
      dest: 'spec/noot.js',
    },
  dist2: {
    // the files to concatenate
    src: ['src/**/*.js'],
    // the location of the resulting JS file
    dest: 'dist/aap.js'
  }
}

});
  
  grunt.loadNpmTasks('grunt-contrib-concat');

};