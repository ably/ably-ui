module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:react/recommended",
        "prettier",
        "plugin:storybook/recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-non-null-assertion": 0,
        "react/display-name": "off",
      },
    },
  ],
};
