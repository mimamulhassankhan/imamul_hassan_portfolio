import reactLint from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
    reactLint.configs['recommended'],
    reactHooks.configs['recommended-latest']
]