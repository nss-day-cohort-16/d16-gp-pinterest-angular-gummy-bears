module.exports = function(grunt) {

grunt.initConfig({

jshint: {
    files: ['../app/**/*.js'],
    options: {
        predef: ["document", "console", "$", "$scope", "firebase" ],
        esnext: true,
        browser: true,
        globalstrict: true,
        globals: {"angular": true, "app": true}
    }
},

copy: {
    bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist',
        src: ['**'],
        dest: '../dist'
    },
    jquery: { // not with materialize
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
    }
},

sass: {
    dist: {
        files: {
            '../css/main.css': '../sass/styles.scss'
        }
    }
},

watch: {
    src: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
    },
    sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
    }
}

});

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.registerTask('default', ['jshint', 'copy', 'sass', 'watch']);
};
