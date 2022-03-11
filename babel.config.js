module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          // Use React 17 automatic JSX runtime.
          jsxRuntime: "automatic",
        },
      ],
    ],
    plugins: ["react-native-reanimated/plugin",
      [
        'module-resolver',
        {
          // "root": ["."],
          "extensions": ['.tsx', '.ts', '.js', '.jsx', '.json'],
          "alias": {
            "features": './features',
            "shared": './shared',
            "mocks": './mocks',
            "screens": './screens',
            "hooks": './hooks',
            "hooks": './hooks',
            "constants": './constants',
            "assets": './assets',
          },
        },
      ],
    ],
  };
};
