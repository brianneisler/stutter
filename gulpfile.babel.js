//-------------------------------------------------------------------------------
// Requires
//-------------------------------------------------------------------------------

import del from 'del';
import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import recipe from 'gulp-recipe';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';
import jest from 'jest-cli';


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
    '!examples/**',
    '!node_modules/**'
  ]
};


//-------------------------------------------------------------------------------
// Gulp Tasks
//-------------------------------------------------------------------------------

gulp.task('default', ['prod']);

gulp.task('prod', ['babel']);

gulp.task('dev', ['babel', 'lint', 'babel-watch', 'lint-watch']);

gulp.task('test', ['lint', 'jest']);

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

gulp.task('clean', () => {
  return del([
    'dist'
  ]);
});

gulp.task('jest', () => {
  return runJest({
    name: '',
    scriptPreprocessor: '<rootDir>/node_modules/babel-jest',
    unmockedModulePathPatterns: [
      'error-stack-parser',
      'immutable',
      'lodash',
      'stutter-util',
      '<rootDir>/src/defines',
      '<rootDir>/src/core/context',
      '<rootDir>/src/core/expression',
      '<rootDir>/src/core/identifier',
      '<rootDir>/src/core/index',
      '<rootDir>/src/core/keyword',
      '<rootDir>/src/core/namespace',
      '<rootDir>/src/core/scope',
      '<rootDir>/src/log/index',
      '<rootDir>/src/log/levels',
      '<rootDir>/src/log/logger',
      '<rootDir>/src/log/types'
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
      '/.nvm/'
    ],
    testFileExtensions: [
      'js'
    ],
    moduleFileExtensions: [
      'js'
    ],
    modulePathIgnorePatterns: [
      '/node_modules/',
      '/.nvm/'
    ],
    testDirectoryName: 'tests'
  });
});

gulp.task('lint', recipe.get('eslint', sources.eslint));


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


//-------------------------------------------------------------------------------
// Helper Functions
//-------------------------------------------------------------------------------

function runJest(options) {
  return new Promise((resolve, reject) => {
    options = options || {};
    options.rootDir = options.rootDir || process.cwd();
    jest.runCLI({
      config: options
    }, options.rootDir, (success) => {
      if (!success) {
        reject(new util.PluginError('gulp-jest', {message: 'Tests Failed'}));
      } else {
        resolve();
      }
    });
  });
}
