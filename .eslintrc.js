module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        "airbnb",
    ],
    plugins: ["@typescript-eslint"],
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json']
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.js', '.json'],
            },
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        // 4个空格缩进 强制switch的case字句缩进级别
        indent: [2, 4,
            {
                SwitchCase: 1,
                ignoredNodes: ['TemplateLiteral'],
            },
        ],
        // 每行最大长度
        'max-len': [2, {
            code: 150,
        }],
        // import 可以不用写后缀.js .vue
        'import/extensions': [
            'error',
            'never',
            {
                ts: 'always',
                js: 'always',
                vue: 'always',
                json: 'always',
            },
        ],
        'import/no-unresolved': [
            2,
            {
                ignore: ['^@/']
            },
        ],
        // 允许部分页面引用 devDependencies 中的依赖
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.js',
                    '**/*.test.jsx',
                    '**/*.test.ts',
                    '**/*.test.tsx',
                    'rollup.config.ts'
                ],
            },
        ],
        "eol-last": 0,
    },
    overrides: [{
        files: [
            '**/__tests__/*.{j,t}s?(x)',
            '**/tests/unit/**/*.spec.{j,t}s?(x)',
        ],
        env: {
            jest: true,
        },
    }],
};
