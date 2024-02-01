# Jon Documentation

## System Requirement

- Node JS 20.x.x

## Dependecies Tambahan

- $ npm i antd // ==> Ant Design

## devDependecies Tambahan

- $ npm i -D jest
- $ npm i -D @testing-library/react
- $ npm i -D @testing-library/jest-dom
- $ npm i -D @testing-library/user-event
- $ npm i -D @babel/preset-react
- $ npm i -D @babel/preset-env
- $ npm i -D jest-environment-jsdom
- $ npm i -D jest-sonar
- $ npm i -D identity-obj-proxy

## Configurasi agar bisa melakukan Testing

- di file package.json, dibagian script, tambahkan script berikut:
  "test":"jest"

- Untuk melakukna test, silahkan ketikkan "npm run test" di terminal

- Membuat file jest.config.cjs dengan sintak berikut:

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

- Membuat file .babelrc dengan sintak berikut:

  {
  "presets": [
  "@babel/preset-env",
  [
  "@babel/preset-react",
  {
  "runtime": "automatic"
  }
  ]
  ]
  }

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
