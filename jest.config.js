// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '\\.(js|ts|jsx|tsx)$': 'babel-jest',
    // '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|webmanifest|xml)$': '<rootDir>/jest/fileTransformer.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(new-github-issue-url))'],
  testMatch: ['**/?(*.)+(spec|test).?(m)[jt]s?(x)'],
  moduleFileExtensions: ['js', 'mjs', 'ts'],
  setupFiles: ['jest-canvas-mock', '<rootDir>/test/polyfills.js', '<rootDir>/test/test-env.js', '<rootDir>/test/test-env-mocks.js'],
  coverageDirectory: '<rootDir>/coverage',
  moduleDirectories: ['node_modules', 'offline'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/offline/', '<rootDir>/dist/', '<rootDir>/src/admin/'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/scripts/styleMock.js',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/scripts/fileMock.js',
    '@app(.*)$': '<rootDir>/src/$1',
  },
  coverageReporters: ['lcov', 'html', 'text'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/js/lib/external/', '/test/', '/dist/'],
};
