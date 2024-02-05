module.exports = {
  preset: "jest-expo",
  testEnvironment: "jsdom",
  cacheDirectory: ".jest/cache",
  moduleDirectories: ["src", "node_modules"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  coveragePathIgnorePatterns: ["styles.ts", "constants.ts"],
  testTimeout: 5000,
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@sentry/.*)",
  ],
};
