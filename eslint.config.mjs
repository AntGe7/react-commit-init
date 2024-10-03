import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  // 设置应用 ESLint 检查的文件类型
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },

  // 设置 ESLint 的全局选项，如浏览器环境变量
  { languageOptions: { globals: globals.browser } },

  // ESLint 的推荐规则集
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Prettier 插件的配置，用于启用 Prettier 作为 ESLint 规则
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // 将 Prettier 设置为 ESLint 规则并设置错误级别为 "error"
      'prettier/prettier': 'error',
    },
  },

  // 禁用与 Prettier 冲突的规则，确保 Prettier 格式化的代码不会被 ESLint 覆盖
  prettier,

  // React 和 TypeScript 额外设置
  {
    settings: {
      react: {
        version: 'detect', // 自动检测 React 版本
      },
    },
  },
];
