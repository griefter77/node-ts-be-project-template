import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import stylisticTs from '@stylistic/eslint-plugin-ts'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'

export default [
    js.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
        },
        plugins: {
            '@typescript-eslint': tseslint,
            '@stylistic/ts': stylisticTs,
            '@stylistic/js': stylisticJs,
            '@stylistic/jsx': stylisticJsx
        },
        rules: {
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'jsx-quotes': ['error', 'prefer-double'],
            "space-infix-ops": ["error", { "int32Hint": false }],

            // a=1, b=2
            "@stylistic/ts/comma-spacing": ["error", { "before": false, "after": true }],

            // <Button onClick={handleClick} /> 
            // <Button onClick = {handleClick} />
            "@stylistic/jsx/jsx-equals-spacing": ['error', "never"],

            // <Button onClick={ handleClick } />
            // <Button onClick={handleClick}/>
            "@stylistic/jsx/jsx-curly-spacing": ['error', { "when": "never", "children": true }],

            "object-curly-spacing": ["error", "always"],

            'quotes': ['error', 'double'],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn'],
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/explicit-module-boundary-types": "error",
        },
    },
];
