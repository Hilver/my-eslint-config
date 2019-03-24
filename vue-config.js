{
	"eslintConfig": {
		"root": true,
		"env": {
			"node": true
		},
		"extends": [
			"plugin:vue/essential",
			"@vue/standard"
		],
		"parserOptions": {
			"parser": "babel-eslint"
		},
		"rules": {
			"indent": [
				"error",
				4
			],
			"linebreak-style": [
				"error",
				"unix"
			],
			"no-tabs": [
				"error",
				{
					"allowIndentationTabs": true
				}
			],
			"semi": [
				"error",
				"never"
			],
			"quotes": [
				"error",
				"single"
			]
		}
	}
}