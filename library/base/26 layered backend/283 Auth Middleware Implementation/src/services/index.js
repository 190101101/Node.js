const commonService = require('./common.service');
const companyService = require('./company.service');
const titleService = require('./title.service');
const personService = require('./person.service');
const authService = require('./auth.service');

module.exports = {
	common: commonService,
	company: companyService,
	title: titleService,
	person: personService,
	auth: authService,
}