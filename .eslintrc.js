module.exports = {
  env: {
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
      "ecmaFeatures": {
          "jsx": true
      },
      "sourceType": "module"
  },
  plugins: [
      "react",
      "import"
  ],
  rules: {
      "indent": ["off", 2],
      "react/jsx-indent": ["error", 2],
      "no-console": ["off"],
      "import/no-unresolved": ["off"],
      "react/no-find-dom-node": ["warn"]
  }
};
