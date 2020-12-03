import React from 'react';
import { Button, Input } from 'antd';
import { BtnLogin, Card, Logo } from './styles';
import LogoSVG from './LogoSVG';

export default function Login() {
	return (
		<form className="container">
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
							placeholder="User name"
							style={{ minWidth: 300 }}
						/>
						<Input
							className="mt-3"
							name="password"
							type="password"
							size="large"
							placeholder="Password"
							style={{ minWidth: 300 }}
						/>
						<BtnLogin>Login</BtnLogin>
						<p
							className="text-center mt-2 mb-0"
							style={{ opacity: 0.8, fontSize: 12 }}
						>
							OR
						</p>
						<Button
							className="mt-3"
							size="large"
							style={{
								backgroundColor: 'white',
								color: 'rgb(80, 95, 121)',
								fontWeight: 'bold',
								border: 'none',
								boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 10px',
							}}
						>
							<img
								src="./img/google-logo.svg"
								alt=""
								style={{ height: 20, marginRight: 10 }}
							/>
							Continue with Google
						</Button>
						<Button
							className="mt-3"
							size="large"
							style={{
								backgroundColor: 'white',
								color: 'rgb(80, 95, 121)',
								fontWeight: 'bold',
								border: 'none',
								boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 10px',
							}}
						>
							<img
								src="./img/microsoft-logo.svg"
								alt=""
								style={{ height: 20, marginRight: 10 }}
							/>
							Continue with Microsoft
						</Button>
						<Button
							className="mt-3"
							size="large"
							style={{
								backgroundColor: 'white',
								color: 'rgb(80, 95, 121)',
								fontWeight: 'bold',
								border: 'none',
								boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 10px',
							}}
						>
							<img
								src="./img/apple-logo.svg"
								alt=""
								style={{ height: 20, marginRight: 10 }}
							/>
							Continue with Apple
						</Button>
					</Card>
				</div>
			</div>
		</form>
	);
}
