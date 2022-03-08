const path = require('path');
const { transformFileSync } = require('@babel/core');

const insertLine = require('./insertLine');

const { code } = transformFileSync(path.join(__dirname, './sourceCode.js'), {
	plugins: [insertLine],
	parserOpts: {
		sourceType: 'unambiguous',
		plugins: ['jsx'],
	},
});

console.log(code);
