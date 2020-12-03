import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { Route } from 'react-router-dom';

export const UserLoginTemplate = (propsRoute) => {
	let { Component, ...restRoute } = propsRoute;

	return (
		<Route
			{...restRoute}
			render={(propsRoute) => {
				return (
					<>
						<Layout>
							<Sider
								width={window.innerWidth / 2}
								style={{
									height: window.innerHeight,
									backgroundImage:
										'url("./img/login_bg.jpg")',
									backgroundSize: 'cover',
									backgroundPosition: 'right',
								}}
							/>
							<Content>
								<Component {...propsRoute} />
							</Content>
						</Layout>
					</>
				);
			}}
		/>
	);
};
