module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-perf/recommended",
    "plugin:storybook/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "react/display-name": "off",
    "react-perf/jsx-no-new-function-as-prop": "off",
    "react-perf/jsx-no-new-object-as-prop": "off",
    "react-perf/jsx-no-new-array-as-prop": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-non-null-assertion": 0,
      },
    },
  ],
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
