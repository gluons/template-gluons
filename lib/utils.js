const validate = require('validate-npm-package-name');

function validateName() {
	let validationResult = validate(name);
	let errorsMsg = '';
	if (Array.isArray(validationResult.warnings)) {
		errorsMsg += validationResult.warnings.join('\n');
	}
	if (Array.isArray(validationResult.errors)) {
		errorsMsg += errorsMsg.length > 0 ? '\n' : '';
		errorsMsg += validationResult.errors.join('\n');
	}
	if (validationResult.validForNewPackages) {
		return true;
	} else {
		return errorsMsg;
	}
}

module.exports = {
	validateName
};
