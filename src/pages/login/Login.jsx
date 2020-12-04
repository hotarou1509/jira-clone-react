import React from 'react';
import { Input } from 'antd';
import { BtnLogin, BtnSocial, Card, Logo } from './styles';
import LogoSVG from './LogoSVG';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { signinJiraAction } from '../../redux/actions/JiraActions';

function Login(props) {
	const {
		// values,
		// touched,
		// handleBlur,
		errors,
		handleChange,
		handleSubmit,
	} = props;

	return (
		<form onSubmit={handleSubmit} className="container">
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: window.innerHeight }}
			>
				<div className="d-flex" style={{ flexDirection: 'column' }}>
					<Logo className="mb-5">
						<LogoSVG />
					</Logo>
					<Card>
						<Input
							className="mt-3"
							name="email"
							type="text"
							size="large"
							placeholder="Email"
							style={{ minWidth: 300 }}
							onChange={handleChange}
						/>
						<div className="text-danger">{errors.email}</div>
						<Input
							className="mt-3"
							name="password"
							type="password"
							size="large"
							placeholder="Password"
							style={{ minWidth: 300 }}
							onChange={handleChange}
						/>
						<div className="text-danger">{errors.password}</div>
						<BtnLogin htmlType="submit">Login</BtnLogin>
						<p
							className="text-center mt-2 mb-0"
							style={{ opacity: 0.8, fontSize: 12 }}
						>
							OR
						</p>
						<BtnSocial className="mt-3">
							<img
								src="./img/google-logo.svg"
								alt="google-logo"
							/>
							Continue with Google
						</BtnSocial>
						<BtnSocial className="mt-3">
							<img
								src="./img/microsoft-logo.svg"
								alt="microsoft-logo"
							/>
							Continue with Microsoft
						</BtnSocial>
						<BtnSocial className="mt-3">
							<img src="./img/apple-logo.svg" alt="apple-logo" />
							Continue with Apple
						</BtnSocial>
					</Card>
				</div>
			</div>
		</form>
	);
}

const LoginWithFormik = withFormik({
	mapPropsToValues: () => ({ email: '', password: '' }),

	validationSchema: Yup.object().shape({
		email: Yup.string()
			.required('Email is required')
			.email('Email is invalid'),
		password: Yup.string()
			.min(6, 'Password must have min 6 characters')
			.max(32, 'Password must have max 32 charactres'),
	}),
	handleSubmit: ({ email, password }, { props, setSubmitting }) => {
		props.dispatch(signinJiraAction(email, password));
	},

	displayName: 'BasicForm',
})(Login);

export default connect()(LoginWithFormik);
