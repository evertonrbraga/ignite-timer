import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  coverageProvider: 'v8',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/main.tsx',
    'src/styles/global.ts'
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/.jest/mocks/fileMock.ts',
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}

export default config
