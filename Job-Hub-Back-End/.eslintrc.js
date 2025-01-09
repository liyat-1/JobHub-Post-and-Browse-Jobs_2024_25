module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
/*
 
"@babel/plugin-syntax-logical-assignment-operators@^7.8.3":
  version "7.10.4"
  resolved "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz"
  integrity sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.4"

"@babel/plugin-syntax-nullish-coalescing-operator@^7.8.3":
  version "7.8.3"
  resolved "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz"
  integrity sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-numeric-separator@^7.8.3":
  version "7.10.4"
  resolved "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz"
  integrity sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.4"

"@babel/plugin-syntax-object-rest-spread@^7.8.3":
  version "7.8.3"
  resolved "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz"
  integrity sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-optional-catch-binding@^7.8.3":
  version "7.8.3"
  resolved "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz"
  integrity sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-optional-chaining@^7.8.3":
  version "7.8.3"
  resolved "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz"
  integrity sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-top-level-await@^7.8.3":
  version "7.14.5"
  resolved "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz"
  integrity sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==
  dependencies:
    "@babel/helper-plugin-utils" "^7.14.5"

"@babel/plugin-syntax-typescript@^7.7.2":
  version "7.20.0"
  resolved "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.20.0.tgz"
  integrity sha512-rd9TkG+u1CExzS4SM1BlMEhMXwFLKVjOAFFCDx9PbX5ycJWDoWMcwdJH9RhkPu1dOgn5TrxLot/Gx6lWFuAUNQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.19.0"

"@babel/template@^7.20.7", "@babel/template@^7.25.9", "@babel/template@^7.3.3":
  version "7.25.9"
  resolved "https://registry.npmjs.org/@babel/template/-/template-7.25.9.tgz"
  integrity sha512-9DGttpmPvIxBb/2uwpVo3dqJ+O6RooAFOS+lB+xDqoE2PVCE8nfoHMdZLpfCQRLwvohzXISPZcgxt80xLfsuwg==
  dependencies:
    "@babel/code-frame" "^7.25.9"
    "@babel/parser" "^7.25.9"
    "@babel/types" "^7.25.9"

"@babel/traverse@^7.20.10", "@babel/traverse@^7.20.12", "@babel/traverse@^7.20.13", "@babel/traverse@^7.7.2":
  version "7.26.4"
  resolved "https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.4.tgz"
  integrity sha512-fH+b7Y4p3yqvApJALCPJcwb0/XaOSgtK4pzV6WVjPR5GLFQBRI7pfoX2V2iM48NXvX07NUxxm1Vw98YjqTcU5w==
  dependencies:
    "@babel/code-frame" "^7.26.2"
    "@babel/generator" "^7.26.3"
    "@babel/parser" "^7.26.3"
    "@babel/template" "^7.25.9"
    "@babel/types" "^7.26.3"
    debug "^4.3.1"
    globals "^11.1.0"
*/
