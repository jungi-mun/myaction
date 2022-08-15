module.exports = {
    verbose: true,
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "src", "bower_components", "shared"],
    roots: ["<rootDir>/src", "<rootDir>/res"],
    moduleNameMapper: {
      //"identity-obj-proxy",
      //"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      //"\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
      "^.+\\.svg$": "jest-svg-transformer",
      "^.+\\.(css|less)$": "identity-obj-proxy",
    },
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/svgTransformer.js"
    }
  };