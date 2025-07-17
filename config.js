/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/
/** @type {import('@maizzle/framework').Config} */
export default {
  build: {
    content: ['src/templates/**/*.html'],
    static: {
      source: ['src/assets/images/**/*.*'],
      destination: 'dist/images',
    }, 
    css: {
      inline: true,
      purge: true,
      shorthand: true,
    },
    prettify: true,
  },
}


    // templates: {
    //   source: 'src/templates',
    //   destination: {
    //     path: 'build_local',
    //   },
    //   assets: {
    //     source: 'src/assets/images',
    //     destination: 'images',
    //   },
    // },
