module.exports = {
	// 定义环境的全局变量
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
		jquery: true,
		commonjs: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended', '@vue/prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['vue', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		/**
		 * 可自动修复
		 */
		// 使用2个空格缩进（js语句）
		/* indent: [
            2,
            2,
            {
                SwitchCase: 2, // switch语句必须增进一个层级
                VariableDeclarator: 2, // 变量声明必须增进一个层级
                ObjectExpression: 2, // 对象中的属性缩进
                ArrayExpression: 2, // 数组中的元素缩进
                FunctionDeclaration: {
                    body: 2, // 函数表达式中参数的缩进
                    parameters: 2, // 函数表达式中函数体的缩进
                },
            },
        ],*/
		// 'space-before-blocks': 2, // 强制在大括号前放置一个空格
		// 'keyword-spacing': 2, // 强制关键字前后放置一个空格
		// 'key-spacing': 2, // 强制在对象字面量的键和值之间使用一致的空格
		// 'space-before-function-paren': 2, // 强制在函数圆括号有空格
		// 'space-infix-ops': 2, // 强制在操作符周围有空格
		// 'space-unary-ops': 2, // 强制在一元运算符周围使用一致空格
		// 'space-in-parens': 2, // 禁止在圆括号内加空格
		// 'array-bracket-spacing': 2, // 禁止在[]内加空格
		/* 'no-multiple-empty-lines': [
			2,
			{
				max: 1, // 强制空行最多只能1行
			},
		],*/
		'wrap-iife': 1, // 把立即执行的函数包裹起来
		'spaced-comment': 2, // 强制在注释之前有一个空格
		// 'func-call-spacing': 2, // 禁止在函数标识符和其调用之间有空格
		// 'semi-spacing': 2, // 禁止分号前有空格，强制逗号后有空格
		// 'comma-spacing': 2, // 禁止逗号前有空格，强制逗号后有空格
		// 'arrow-spacing': 2, // 强制箭头函数的箭头前后有空格
		'no-confusing-arrow': 2, // 禁止在可能与比较操作符相混淆的地方使用箭头函数

		/**
		 * 不可自动修复
		 */
		/* 'max-len': [
			2,
			{
				code: 120, // 强制每行不得超过120个字符
			},
		],*/
		'no-eval': 2, // 禁用 eval()
	},
};
