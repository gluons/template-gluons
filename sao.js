const superb = require('superb');

module.exports = {
	prompts: {
		name: {
			message: 'Project name?',
			default: ':folderName:'
		},
		version: {
			message: 'Version?',
			default: '1.0.0'
		},
		description: {
			message: 'Description?',
			default: `My ${superb()} project`
		},
		author: {
			message: 'Author?',
			default: ':gitUser: <:gitEmail:>',
			store: true
		},
		license: {
			message: 'License?',
			default: 'MIT'
		},
		homepage: {
			message: 'Homepage?',
			default: 'https://github.com/:gitUser:/:folderName:',
			store: true
		},
		mocha: {
			message: 'Use mocha as test framework?',
			type: 'confirm',
			default: false
		}
	},
	move: {
		'gitignore': '.gitignore'
	},
	showTip: true,
	installDependencies: true
};
