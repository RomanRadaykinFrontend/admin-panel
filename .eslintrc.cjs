module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "no-return-assign": "off",
    "vue/multi-word-component-names": "off",
    "vue/singleline-html-element-content-newline": "off",
    "no-trailing-spaces": "off",
    "no-console": "off",
    "no-useless-escape": "off",
    "vue/order-in-components": "off",
    "no-extend-native": "off",
    "vue/no-v-html": "off",
    "no-lonely-if": "off",
    "vue/component-definition-name-casing": "off",
    "vue/html-self-closing": "off",
  },
};
