module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb'
	],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'comma-dangle': ['error', 'never'],
		semi: ['error', 'never'],
		'max-len': ['off'],
		'vuejs-accessibility/click-events-have-key-events': 'off'
	}
}
