// https://prettier.io/docs/en/configuration.html

module.exports = {
  // 120字后折行
  printWidth: 120,

  // 制表符
  tabWidth: 2,

  // 使用制表符, 否则使用空格
  useTabs: false,

  // 单引号
  singleQuote: true,

  // 尾随逗号 <none|es5|all>
  trailingComma: 'es5',

  // 括号两边添加空格
  bracketSpacing: true,

  // jsx 把 > 放置在最后一行末尾
  jsxBracketSameLine: false,

  // 语法解析 <babylon|flow|typescript|postcss|json|graphql|markdown>
  parser: 'flow',

  // 末尾添加分号
  semi: true,

  // 多行 (Markdown) <always|never|preserve>
  proseWrap: 'preserve',

  // 箭头函数参数始终放置圆括号 <avoid|always>
  arrowParens: 'always',

  // 范围
  rangeStart: 0,
  rangeEnd: Infinity,

  // Prettier-ESLint
  eslintIntegration: true,

  // Prettier-stylelint
  stylelintIntegration: true,

  // 引入配置文件
  requireConfig: false,

  // 过滤
  ignorePath: '.prettierignore',

  // 禁用语言
  disableLanguages: ['vue'],

  // 数组展开
  arrayExpand: true,

  // 括号添加空格
  bracesSpacing: true,

  // 漂亮的输出
  // openOutput: true,

  // jsx 单引号
  // jsxSingleQuote: true,
};
