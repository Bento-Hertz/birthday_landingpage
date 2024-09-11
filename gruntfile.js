module.exports = (grunt) => {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            dist: {
                options: {
                    compress: true
                },
                files: {
                    'prebuild/main.min.css':
                    'src/styles/main.less'
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },

        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_JS',
                            replacement: './scripts/main.min.js'
                        },
                        {
                            match: 'ENDERECO_ASSETS',
                            replacement: '../../src/assets'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'build/dist/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/main.min.css'],
                        dest: 'build/dist/styles/'
                    }
                ]
            }
        },

        uglify: {
            target: {
                files: {
                    'build/dist/scripts/main.min.js':
                    'src/scripts/main.js'
                }
            }
        },

        clean: ['prebuild'],

        watch: {
            files: ['src/styles/**/*.less', 'src/index.html', 'src/scripts/main.js'],
            tasks: ['less', 'htmlmin', 'replace', 'uglify', 'clean']
        }
    });

    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['watch']);
}