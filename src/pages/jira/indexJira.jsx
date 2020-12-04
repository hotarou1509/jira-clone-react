import React from 'react';
import ContentMain from './main/ContentMain';
import HeaderMain from './main/HeaderMain';
import InfoMain from './main/InfoMain';

export default function indexJira() {
	return (
		<div className="main">
			<HeaderMain />
			<h3>Cyber Board</h3>
			<InfoMain />
			<ContentMain />
		</div>
	);
}
