import React from 'react';
import { Button, Input } from 'antd';
import {
	UserOutlined,
	LockOutlined,
	FacebookOutlined,
	TwitterOutlined,
} from '@ant-design/icons';

export default function Login() {
	return (
		<form className="container">
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: window.innerHeight }}
			>
				<div className="d-flex" style={{ flexDirection: 'column' }}>
					<h3 className="text-center">Login</h3>
					<Input
						className="mt-3"
						name="email"
						type="text"
						size="large"
						placeholder="User name"
						prefix={<UserOutlined />}
						style={{ minWidth: 300 }}
					/>
					<Input
						className="mt-3"
						name="password"
						type="password"
						size="large"
						placeholder="Password"
						prefix={<LockOutlined />}
						style={{ minWidth: 300 }}
					/>
					<Button
						className="mt-3"
						size="large"
						style={{
							backgroundColor: 'rgba(112,117,223)',
							color: '#ffffff',
						}}
					>
						Login
					</Button>
					<div className="social mt-3 d-flex justify-content-center">
						<Button
							className="mr-2"
							type="primary"
							shape="circle"
							icon={<FacebookOutlined />}
							size="large"
						></Button>
						<Button
							type="primary"
							shape="circle"
							icon={<TwitterOutlined />}
							size="large"
						></Button>
					</div>
				</div>
			</div>
		</form>
	);
}
