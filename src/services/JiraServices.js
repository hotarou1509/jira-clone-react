const { default: Axios } = require('axios');
const { DOMAIN_JIRA } = require('../util/const/settingSystem');

export const jiraService = {
	signinJira: (userLogin) => {
		return Axios({
			url: `${DOMAIN_JIRA}/users/signin`,
			method: 'POST',
			data: userLogin,
		});
	},
};
