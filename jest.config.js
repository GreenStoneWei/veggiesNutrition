module.exports = {
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['**/*.js', '!**/config/**', '!**/node_modules/**', '!**/test/**', '!**/migrations/**', '!ts-jest.config.js', '!jest.config.js'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/', 'package.json'],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['html'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '/test/utils/', '/test/mocks/'],

  // A map from regular expressions to paths to transformers
  transform: {},

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  watchPathIgnorePatterns: ['\\.ts$']
}
