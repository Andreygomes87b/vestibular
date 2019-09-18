module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

// Join all .js into two different builds: build1 assemble top_js for the critical scripts and build2 assemble bottom_js for the not-so-critial; there is also
// build3 that assembles all fontawesome scripts into one. 
uglify: {

    build1: {

        src: ["src/js/uncompressed/video_resp.js", "src/js/uncompressed/jquery-3.4.0.min.js", "src/js/uncompressed/modernizr-custom.js", "src/js/uncompressed/webp.js", "src/js/uncompressed/backToTop.js"/*"src/js/uncompressed/index.js","src/js/uncompressed/hammer.min.js", "src/js/uncompressed/jquery-1.12.4.min.js","src/js/uncompressed/jquery_v3.3.1.min.js",*/],

        dest: "top_js_uglyfied.js",

    }/*,

    build2: {

        src: ["src/js/uncompressed/index.js","src/js/uncompressed/menu_mobile.js", "src/js/uncompressed/hamburger_transition.js"],

        dest: "bottom_js_uglyfied.js",

    } */,

    build3: {

        src: ["src/js/uncompressed/fontawesome.js", "src/js/uncompressed/solid.js", "src/js/uncompressed/brands.js"],

        dest: "fontAwesome-compressed.js",

    }

},



cssmin: {

  target: {

    files: [{

      expand: true,

      cwd: 'src/css',

      src: ['*.css', '!*.min.css'],

      dest: 'src/css/min',

      ext: '.min.css'

    }]

  }

},





// concat_css: {

//     options: {},

//     all: {

//       src: ["src/css/min/main.min.css"/*,"src/css/min/animate.min.css", "src/css/min/styles.min.css", "src/css/min/materialize.min.css"*/],

//       dest: "main-compressed.css"

//     }},


concat_css: {

    build1: {

      src: ["src/css/min/main.min.css"/*,"src/css/min/animate.min.css", "src/css/min/styles.min.css", "src/css/min/materialize.min.css"*/],

      dest: "main-compressed.css"

    },

    // Turn on build2 only to concatenate all the different font awesome styles, if you let them uncommented, it will affect the relative path configuration.
    build2: {

        src: ["src/css/solid.css", "src/css/regular.css", "src/css/brands.css"],
  
        dest: "src/css/fa-compiled.css"
  
      },

    build3: {

        src: ["src/css/min/fontawesome.min.css", "src/css/min/fa-compiled.min.css"],
  
        dest: "fontawesome-compiled.css"
  
      }

},




htmlmin: {

   dist: {

      options: {

         removeComments: true,

         collapseWhitespace: true

      },

      files: [{

         expand: true,         

         src: 'index.html',

         ext: '.php'

      }]

   }

},





watch: {

    options: {

        livereload: true

    },

    js: {

        files: "js/*.js",

        tasks: ["uglify"]

    },

    css: {

        files: "src/css/main.css",

        tasks: ["cssmin", "concat_css"]       

    },

    html: {

        files: "index.html",

        tasks: ["htmlmin"]

    }    

},





connect: {

    server: {

        options: {

            port: 9000,

            base: ".",

            hostname: "localhost",

            livereload: true,

            open: true

        }

    }

}



    });



    // 3. Where we tell Grunt we plan to use this plug-in.    

    grunt.loadNpmTasks('grunt-contrib-uglify');    

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-concat-css');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-connect');



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.

   grunt.registerTask( 'default', ['uglify','cssmin','concat_css','htmlmin','connect','watch']);



};