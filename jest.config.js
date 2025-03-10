export default {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx', '.ts', '.tsx'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.[jt]s?(x)'],
  verbose: true,
}; 