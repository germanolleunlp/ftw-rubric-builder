module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/test/setupTest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(css|scss|less)$': 'jest-css-modules'
  }
};
