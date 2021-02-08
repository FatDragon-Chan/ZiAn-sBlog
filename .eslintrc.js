// http://eslint.cn/docs/user-guide/configuring
module.exports = {
  //ESLint 将自动在要检测的文件目录里寻找它们，紧接着是父级目录，一直到文件系统的根目录
  "root": true,
  //要在配置文件里指定环境，使用 env 关键字指定你想启用的环境，并设置它们为 true。
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  //一个配置文件可以被基础配置中的已启用的规则继承。
  "extends": [
    "eslint:recommended", //指定配置的字符串(配置文件的路径、可共享配置的名称、eslint:recommended 或 eslint:all)
    "plugin:vue/essential"
  ],
  // 配置全局变量 设置为 "writable" 以允许重写变量，或 "readonly" 不允许重写变量。
  "globals": {
    "AMap": "readonly",
    "WeixinJSBridge": "readonly",
    "Toast": "readonly"
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 6, //默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
    "sourceType": "module" //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
  },
  // 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-case-declarations": 0, //不允许在 case 子句中使用词法声明
    "vue/no-reserved-keys": 0,
    "vue/valid-v-for": 1,
    "no-irregular-whitespace": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "vue/no-unused-components": 0,
    "vue/no-unused-vars": 0,
    "vue/require-valid-default-prop": 2, //enforce props default values to be valid
    "vue/valid-v-model": 0, //enforce valid v-model directives
    "vue/require-v-for-key": 0,
    "no-var": 2,//禁用var，用let和const代替
    "no-unused-vars": 0, // 禁止出现未使用过的变量
    "wrap-regex": 0, //要求正则表达式被括号括起来
    "no-prototype-builtins": 0, //禁止直接调用 Object.prototypes 的内置属性
    "no-control-regex": 0, //禁止在正则表达式中使用控制字符
    "no-useless-escape": 0, //禁用不必要的转义字符
    "no-redeclare": 2, //禁止多次声明同一变量
    "no-console": 0
  }
};
