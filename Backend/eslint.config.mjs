import js from "@eslint/js"
import globals from "globals"
import { FlatCompat } from "@eslint/eslintrc"
import path from "node:path"
import { fileURLToPath } from "node:url"

const compat = new FlatCompat({
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url)
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename)

export default [
    ...compat.extends(
        "eslint:recommended",
        "prettier",
        "next/core-web-vitals",
        "plugin:react/recommended",
    ),
    {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
        languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.es2021,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        },
        plugins: {
        react: require("eslint-plugin-react"),
        "react-hooks": require("eslint-plugin-react-hooks"),
        },
        rules: {
        "array-callback-return": [
            "error",
            {
            allowImplicit: false,
            checkForEach: true,
            allowVoid: true,
            },
        ],
        "no-await-in-loop": "error",
        "no-constant-binary-expression": "error",
        "no-constructor-return": "error",
        "no-duplicate-imports": ["error", { includeExports: true }],
        "no-new-native-nonconstructor": "error",
        "no-promise-executor-return": ["error", { allowVoid: true }],
        "no-self-compare": "error",
        "no-template-curly-in-string": "error",
        "no-unmodified-loop-condition": "error",
        "no-unreachable-loop": "error",
        "no-unused-private-class-members": "error",
        "require-atomic-updates": "error",
        "arrow-body-style": ["error", "as-needed"],
        camelcase: [
            "error",
            {
            properties: "always",
            ignoreDestructuring: true,
            ignoreImports: true,
            ignoreGlobals: true,
            },
        ],
        "capitalized-comments": [
            "error",
            "always",
            { ignoreConsecutiveComments: true },
        ],
        "class-methods-use-this": ["error", { enforceForClassFields: true }],
        complexity: ["error", 7],
        "consistent-return": "error",
        curly: ["error", "all"],
        "default-param-last": "error",
        "dot-notation": "error",
        eqeqeq: ["error", "always"],
        "func-name-matching": "error",
        "func-names": "error",
        "func-style": ["error", "declaration", { allowArrowFunctions: true }],
        "grouped-accessor-pairs": ["error", "getBeforeSet"],
        "guard-for-in": "error",
        "init-declarations": ["error", "always"],
        "logical-assignment-operators": [
            "error",
            "always",
            { enforceForIfStatements: true },
        ],
        "max-classes-per-file": ["error", { ignoreExpressions: true }],
        "max-depth": ["error", 3],
        "max-lines": [
            "error",
            { max: 150, skipBlankLines: true, skipComments: true },
        ],
        "max-lines-per-function": [
            "warn",
            { max: 100, skipBlankLines: true, skipComments: true },
        ],
        "max-nested-callbacks": ["error", 3],
        "max-params": ["error", 3],
        "multiline-comment-style": ["error", "separate-lines"],
        "new-cap": "error",
        "no-alert": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-empty-static-block": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-label": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-object-constructor": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": "error",
        "no-proto": "error",
        "no-return-assign": ["error", "always"],
        "no-script-url": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": ["error", { allowFunctionParams: false }],
        "no-unused-expressions": ["error", { enforceForJSX: true }],
        "no-useless-call": "error",
        "no-useless-computed-key": ["error", { enforceForClassMembers: true }],
        "no-useless-constructor": "error",
        "no-var": "error",
        "object-shorthand": ["error", "always"],
        "prefer-arrow-callback": "error",
        "prefer-const": [
            "error",
            { destructuring: "any", ignoreReadBeforeAssign: false },
        ],
        "prefer-exponentiation-operator": "error",
        "prefer-object-has-own": "error",
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        quotes: [
            "error",
            "double",
            { avoidEscape: true, allowTemplateLiterals: true },
        ],
        semi: ["error", "never"],
        "padding-line-between-statements": [
            "error",
            {
            blankLine: "always",
            prev: "*",
            next: [
                "return",
                "class",
                "export",
                "function",
                "if",
                "switch",
                "try",
            ],
            },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            { blankLine: "never", prev: ["import"], next: ["import"] },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope": "off",
        },
        settings: {
        react: {
            version: "detect",
        },
        },
    },
]
