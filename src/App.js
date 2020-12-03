import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import { UserLoginTemplate } from './templates/UserLoginTemplate';

export default function App() {
	return (
		<BrowserRouter>
			<UserLoginTemplate exact path="/login" Component={Login} />
		</BrowserRouter>
	);
}
