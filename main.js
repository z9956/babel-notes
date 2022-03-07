const path = require('path');
const { transformFileAsync } = require('@babel/core');

const insertLine = require('./plugin/insertLine');

const { code } = transformFileAsync(path.join(__dirname, './main.js'), {
	plugins: [insertLine],
	parserOpts: {
		sourceType: 'unambiguous',
		plugin: ['jsx'],
	},
});
