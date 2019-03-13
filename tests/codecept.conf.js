exports.config = {
  tests: './*_test.js',
  output: '/results',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      host: 'selenium',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'tests'
}