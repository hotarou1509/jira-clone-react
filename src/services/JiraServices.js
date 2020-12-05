const { default: Axios } = require('axios');
const { DOMAIN_JIRA, TOKEN } = require('../util/const/settingSystem');

export const jiraService = {
	signinJira: (userLogin) => {
		return Axios({
			url: `${DOMAIN_JIRA}/users/signin`,
			method: 'POST',
			data: userLogin,
		});
	},
	getAllProjectCategory: () => {
		return Axios({
			url: `${DOMAIN_JIRA}/ProjectCategory`,
			method: 'GET',
		});
	},
	createProject: (newProject) => {
		return Axios({
			url: `${DOMAIN_JIRA}/Project/createProject`,
			method: 'POST',
			data: newProject,
		});
	},
	createProjectAuthorization: (newProject) => {
		return Axios({
			url: `${DOMAIN_JIRA}/Project/createProjectAuthorize`,
			method: 'POST',
			data: newProject,
			headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }, //JWT
		});
	},
};
