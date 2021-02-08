// prettier配置项说明 https://blog.csdn.net/peade/article/details/103865934
module.exports = {
  printWidth: 160, //编辑器每行的长度，默认80
  tabWidth: 2, //制表符tab的宽度，默认值是2
  useTabs: false, //代码缩进是否用制表符tab，默认false
  semi: false, //是否使用分号，默认true，使用分号
  singleQuote: true, //是否使用单引号，默认为false，不适用单引号，使用双引号
  quoteProps: "as-needed", //对象属性的引号使用 as-needed 仅在需要的时候使用 consistent 有一个属性需要引号，就都需要引号 preserve 保留用户输入的情况
  jsxSingleQuote: false,
  trailingComma: "es5", //末尾逗号 none 末尾没有逗号 es5 es5有效的地方保留 all 在可能的地方都加上逗号
  bracketSpacing: true, //字面量对象括号中的空格，默认true true - Example: { foo: bar }.  false - Example: {foo: bar}.
  jsxBracketSameLine: false,
  arrowParens: "always", //箭头函数中的括号
  endOfLine: "lf", //行末尾标识
  htmlWhitespaceSensitivity: "ignore",
  vueIndentScriptAndStyle: true,
};
