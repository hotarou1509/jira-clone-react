import React, { useState } from 'react';
import { Table, Button, Space } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const data = [
	{
		id: 1,
		projectName: 'abc',
		description: '<p>hello</p>',
	},
];

export default function ProjectManagement() {
	const [state, setState] = useState({
		filteredInfo: null,
		sortedInfo: null,
	});

	const handleChange = (pagination, filters, sorter) => {
		console.log('Various parameters', pagination, filters, sorter);
		setState({
			filteredInfo: filters,
			sortedInfo: sorter,
		});
	};

	const clearFilters = () => {
		setState({ filteredInfo: null });
	};

	const clearAll = () => {
		setState({
			filteredInfo: null,
			sortedInfo: null,
		});
	};

	const setAgeSort = () => {
		setState({
			sortedInfo: {
				order: 'descend',
				columnKey: 'age',
			},
		});
	};

	let { sortedInfo, filteredInfo } = state;
	sortedInfo = sortedInfo || {};
	filteredInfo = filteredInfo || {};
	const columns = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Project Name',
			dataIndex: 'projectName',
			key: 'projectName',
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			render: (text, record, index) => {
				let jsxContent = ReactHtmlParser(text);
				return <div key={index}>{jsxContent}</div>;
			},
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<a href>
						<EditOutlined />
					</a>
					<a href>
						<DeleteOutlined />
					</a>
				</Space>
			),
		},
	];
	return (
		<div className="container">
			<h3 className="mt-5">Project Management</h3>
			<Space style={{ marginBottom: 16 }}>
				<Button onClick={setAgeSort}>Sort age</Button>
				<Button onClick={clearFilters}>Clear filters</Button>
				<Button onClick={clearAll}>Clear filters and sorters</Button>
			</Space>
			<Table
				columns={columns}
				dataSource={data}
				onChange={handleChange}
				rowKey={'id'}
			/>
		</div>
	);
}
