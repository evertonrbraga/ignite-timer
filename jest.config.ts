import type { Config } from 'jest'
import { join } from 'path'

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
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
  },
  moduleDirectories: ['node_modules', join(__dirname, 'src'), 'shared']
}

export default config
