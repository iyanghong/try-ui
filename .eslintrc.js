// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true
	},
	extends: [
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		'plugin:vue/essential',
		// https://github.com/standard/standard/blob/master/docs/RULES-en.md
		'standard'
	],
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// add your custom rules here
	/**
	 * 自定义规则
	 * http://eslint.cn/docs/user-guide/configuring#configuring-rules
	 * 【】基本使用方式
	 * "off" 或者0 关闭规则
	 * "warn" 或者1 将规则打开为警告（不影响退出代码）
	 * "error" 或者2 将规则打开为错误（触发时退出代码为1）
	 * 如：'no-restricted-syntax': 0, // 表示关闭该规则
	 * 【】如果某项规则，有额外的选项，可以通过数组进行传递，而数组的第一位必须是错误级别。如0,1,2
	 * 如 'semi': ['error', 'never'], never就是额外的配置项
	 */
	rules: {
		/**
		 * 具体规则
		 * 【】具体的规则太多，就不做介绍了，有兴趣的同学可以上eslint官网查
		 * 【】注意 xxx/aaa 这些规则是 xxx 插件自定的规则，在eslint官网是查不到的。需要到相应的插件官网中查阅
		 * 【】如 import/extensions，这是「eslint-plugin-import」自定义的规则，需要到其官网查看 https://github.com/benmosher/eslint-plugin-import
		 */
		/*'import/extensions': ['error', 'always', {
			js: 'never',
			vue: 'never'
		}],*/
		'import/no-extraneous-dependencies': ['error', {
			optionalDependencies: ['test/unit/index.js']
		}],
		"indent": ["off", 4],
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		"no-restricted-syntax": 0, //
		"guard-for-in": 0, //
		"prefer-const": 0, //
		"no-else-return": 0, //
		"no-tabs": "off",
		"quote-props": 0,
		"no-plusplus": 0, // 不允许使用++符号
		"object-shorthand": ["error", "always", {"avoidQuotes": false}], // 去除禁止'videoData.isPause'(newValue) 的命名
		"no-lonely-if": 0, // 不允许给函数参数重新赋值
		"no-param-reassign": 0, // 不允许给函数参数重新赋值
		"no-mixed-operators": 0, // 不允许混合使用运算符
		"no-underscore-dangle": 0, // 不允许下划线作为变量名之一
		"no-under": 0, // 不允许混合使用运算符
		'generator-star-spacing': 'off',
		'no-console': 'off', // 禁用no-console规则
		'semi': 0, // 行尾不使用分号
		'quotes': 0, // 字符串必须要单引号
		'object-curly-spacing': 0,
		'eol-last': 0,   //文件最后需要换行
		'comma-dangle': ['error'],
		'eqeqeq': 0, // 不需要强制使用全等
		'space-before-function-paren': 0, //在方法名和刮号之间需要有一格空格
		'max-len': 0,
		'no-multiple-empty-lines': 0,
		'no-void': 0,
		'padded-blocks': 0,
		'spaced-comment': 0,
		'array-callback-return': 0,
		'no-mixed-spaces-and-tabs': 0,
		'import/extensions': 0, //强制输入文件后缀名
		'radix': 0, // parseInt不需要传第二个参数
		'linebreak-style': 0, // 强制执行一致的换行样式，windows和mac不一样
		'consistent-return': 0, // 箭头函数最后不需要最后强制return值
		'no-unused-expressions': ["error", {
			"allowShortCircuit": true,
			"allowTernary": true
		}], // 允许您在表达式中使用三元运算符
		'no-multi-spaces': ['error', {"ignoreEOLComments": true}],
	}

}
