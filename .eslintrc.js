module.exports = {
	// 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
	root: true,
	// 추가적인 규칙들을 적용
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'prettier',
		'plugin:prettier/recommended',
	],
	// 코드 정리 플러그인 추가
	plugins: ['prettier'],
	// 사용자 편의 규칙 추가
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				semi: false,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		semi: ['error', 'never'],
		quotes: ['error', 'single'],
		'vue/html-closing-bracket-newline': 'off',
		'vue/return-in-computed-property': 'off',
		'no-unused-vars': 'warn',
		'vue/no-unused-vars': 'warn',
		//    [
		//    // 'error',
		//    // {
		//    //    singleline: 'never',
		//    //    multiline: 'never',
		//    // },
		// ],

		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
					normal: 'never',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
}
