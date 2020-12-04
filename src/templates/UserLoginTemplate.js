import React, { useState, useEffect } from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Row, Col } from 'antd';
import { Route } from 'react-router-dom';

export const UserLoginTemplate = (propsRoute) => {
	const [size, setSize] = useState({
		height: window.innerHeight,
	});

	useEffect(() => {
		window.onresize = () => {
			setSize({
				height: window.innerHeight,
			});
		};
	}, []);

	let { Component, ...restRoute } = propsRoute;

	return (
		<Route
			{...restRoute}
			render={(propsRoute) => {
				return (
					<>
						<Layout style={{ height: size.height }}>
							<Row>
								<Col span={8}>
									<img
										src="./img/left_SVG.svg"
										alt="left_SVG"
										style={{
											position: 'absolute',
											bottom: 0,
											left: 0,
											width: '80%',
										}}
									/>
								</Col>
								<Col span={8}>
									<Content>
										<Component {...propsRoute} />
									</Content>
								</Col>
								<Col span={8}>
									<img
										src="./img/right_SVG.svg"
										alt="left_SVG"
										style={{
											position: 'absolute',
											bottom: 0,
											right: 0,
											width: '80%',
										}}
									/>
								</Col>
							</Row>
						</Layout>
					</>
				);
			}}
		/>
	);
};
