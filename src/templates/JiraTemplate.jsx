import React from 'react';
import ModalJira from '../pages/jira/modal/ModalJira';
import MenuJira from '../pages/jira/menu/MenuJira';
import SidebarJira from '../pages/jira/menu/SidebarJira';
import { Route } from 'react-router-dom';

export const JiraTemplate = (props) => {
	const { Component, ...restParams } = props;
	return (
		<Route
			{...restParams}
			render={(propsRoute) => {
				return (
					<>
						<Route>
							<div className="jira">
								{/* Sider Bar, Menu  */}
								<SidebarJira />
								<MenuJira />
								{/* Mainboard */}
								<Component {...propsRoute} />
								{/* Modal box */}
								<ModalJira />
							</div>
						</Route>
					</>
				);
			}}
		/>
	);
};
