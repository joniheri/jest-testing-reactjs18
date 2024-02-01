module.exports = {
  collectCoverage: true,
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!src/mocks/**",
    "!src/main.jsx",
    "!src/App.jsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/tests/setupTest.js"],
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  reporters: [
    "default",
    [
      "jest-sonar",
      {
        outputName: "test-reporter.xml",
      },
    ],
  ],
};
