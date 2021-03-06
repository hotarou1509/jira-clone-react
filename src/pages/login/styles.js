import styled from 'styled-components';

export const Logo = styled.span`
	color: rgb(38, 132, 255);
	display: inline-block;
	fill: rgb(0, 82, 204);
	height: 40px;
	position: relative;
	user-select: none;
	& > svg {
		fill: inherit;
		height: 100%;
		left: 0px;
		position: absolute;
		top: 0px;
		width: 100%;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px auto 24px;
	width: 400px;
	padding: 32px 40px;
	background: rgb(255, 255, 255);
	border-radius: 3px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
	box-sizing: border-box;
	color: rgb(94, 108, 132);
`;

export const BtnLogin = styled.button`
	margin-top: 20px;
	line-height: 1.5715;
	position: relative;
	display: inline-block;
	font-weight: 400;
	white-space: nowrap;
	text-align: center;
	background-image: none;
	border: 1px solid transparent;
	box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	user-select: none;
	-ms-touch-action: manipulation;
	touch-action: manipulation;
	height: 32px;
	padding: 4px 15px;
	font-size: 14px;
	border-radius: 2px;
	color: rgb(255, 255, 255);
	background: rgb(0, 82, 204);
	border-color: #d9d9d9;
	height: 40px;
	padding: 6.4px 15px;
	font-size: 16px;
	font-weight: bold;
	border-radius: 2px;
`;

export const BtnSocial = styled.div`
	display: flex;
	justify-content: center;
	background-color: white;
	color: rgb(80, 95, 121);
	font-weight: bold;
	border: none;
	cursor: pointer;
	padding: 10px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
	& > img {
		height: 20px;
		margin-right: 10px;
	}
`;
