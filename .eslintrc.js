module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@builder.io/mitosis/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    "plugins": [
        "@typescript-eslint",
        "@builder.io/mitosis"
    ],
    "rules": {
    "@builder.io/mitosis/css-no-vars": "error"
    }
}
