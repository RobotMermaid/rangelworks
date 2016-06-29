module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'ftp-deploy': {
            stage: {
                auth: {
                    host: 'theplatcal.com',
                    port: 21,
                    authKey: 'rangelworks'
                },
                src: 'www/',
                dest: 'stage.rangelworks.com/',
                exclusions: []
            },
            prod: {
                auth: {
                    host: 'theplatcal.com',
                    port: 21,
                    authKey: 'rangelworks'
                },
                src: 'www/',
                dest: 'rangelworks.com/',
                exclusions: []
            }
        },
        jade : {
            main : {
                options: {
                    data: {
                        debug: true
                    },
                    pretty : true
                },
                files: {
                    "www/index.html": "src/jade/main.jade"
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-contrib-jade');   

    grunt.registerTask('deploy', ['ftp-deploy'])
    grunt.registerTask('default', ['jade']);
};