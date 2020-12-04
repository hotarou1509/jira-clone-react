import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import CreateProject from './pages/createProject/CreateProject';
import Home from './pages/home/Home';
import indexJira from './pages/jira/indexJira';
import Login from './pages/login/Login';
import { JiraTemplate } from './templates/JiraTemplate';
import { UserLoginTemplate } from './templates/UserLoginTemplate';

export default function App() {
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'ADD_HISTORY', history: history });
	}, []);

	return (
		<>
			<Route exact path="/home" component={Home} />
			<UserLoginTemplate exact path="/login" Component={Login} />
			<JiraTemplate exact path="/jira" Component={indexJira} />
			<JiraTemplate
				exact
				path="/projectsetting"
				Component={CreateProject}
			/>
			<Route exact path="/" component={Home} />
		</>
	);
}
