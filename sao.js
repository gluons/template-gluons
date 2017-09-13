const superb = require('superb');

const utils = require('./lib/utils');

module.exports = {
	prompts: {
		name: {
			message: 'Project name?',
			default: ':folderName:',
			validate: utils.validateName
		},
		version: {
			message: 'Version?',
			default: '1.0.0'
		},
		description: {
			message: 'Description?',
			default: `My ${superb()} project`
		},
		username: {
			message: "Author's name?",
			default: ':gitUser:',
			store: true
		},
		email: {
			message: "Author's email?",
			default: ':gitEmail:',
			store: true
		},
		license: {
			message: 'License?',
			default: 'MIT'
		},
		homepage: {
			message: 'Homepage?',
			default({ username, email }) {
				return `https://github.com/${username}/${email}`;
			}
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
