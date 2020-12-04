import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
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
			<Route exact path="/" component={Home} />
		</>
	);
}
