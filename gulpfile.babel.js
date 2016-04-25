//-------------------------------------------------------------------------------
// Requires
//-------------------------------------------------------------------------------

import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import recipe from 'gulp-recipe';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';


//-------------------------------------------------------------------------------
// Gulp Properties
//-------------------------------------------------------------------------------

const sources = {
  babel: [
    'src/**',
    '!**/tests/**'
  ],
  eslint: [
    '**/*.js',
    '!dist/**',
    '!node_modules/**'
  ]
};


//-------------------------------------------------------------------------------
// Gulp Tasks
//-------------------------------------------------------------------------------

gulp.task('default', ['prod']);

gulp.task('prod', ['babel']);

gulp.task('dev', ['babel', 'lint', 'babel-watch', 'lint-watch']);

gulp.task('babel', () => {
  return gulp.src(sources.babel)
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(babel({
      presets: [
        'es2015',
        'stage-1',
        'stage-2'
      ]
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
    .on('error', (error) => {
      util.log(error);
    });
});

gulp.task('lint', recipe.get('eslint', sources.eslint));

gulp.task('test', ['lint']);


//-------------------------------------------------------------------------------
// Gulp Watchers
//-------------------------------------------------------------------------------

gulp.task('babel-watch', () => {
  gulp.watch(sources.babel, ['babel']);
});

gulp.task('lint-watch', () => {
  const lintAndPrint = eslint();
  lintAndPrint.pipe(eslint.formatEach());

  return gulp.watch(sources.eslint, (event) => {
    if (event.type !== 'deleted') {
      gulp.src(event.path)
        .pipe(lintAndPrint, {end: false})
        .on('error', (error) => {
          util.log(error);
        });
    }
  });
});
