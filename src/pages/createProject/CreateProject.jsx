import React, { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { withFormik } from 'formik';
import { GET_ALL_PROJECT_CATEGORY_SAGA } from '../../redux/const/JiraConst';

function CreateProject(props) {
	const arrProjectCategory = useSelector(
		(state) => state.ProjectCategoryReducer.arrProjectCategory,
	);
	const dispatch = useDispatch();

	const { handleSubmit, handleChange, setFieldValues } = props;

	useEffect(() => {
		dispatch({ type: GET_ALL_PROJECT_CATEGORY_SAGA });
	}, []);

	const handleEditorChange = (content, editor) => {
		setFieldValues('description', content);
	};

	return (
		<div className="container m-5">
			<h3>Create Project</h3>
			<form
				className="container"
				onSubmit={handleSubmit}
				onChange={handleChange}
			>
				<div className="form-group">
					<p className="font-weight-bold">Name</p>
					<input
						className="form-control"
						type="text"
						name="projectName"
					/>
				</div>
				<div className="form-group">
					<p className="font-weight-bold">Description</p>
					<Editor
						name="description"
						initialValue=""
						init={{
							height: 500,
							menubar: false,
							plugins: [
								'advlist autolink lists link image charmap print preview anchor',
								'searchreplace visualblocks code fullscreen',
								'insertdatetime media table paste code help wordcount',
							],
							toolbar:
								'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
						}}
						onEditorChange={handleEditorChange}
					/>
				</div>
				<div className="form-group">
					<p className="font-weight-bold">Project Category</p>
					<select
						className="form-control"
						type="text"
						name="categoryId"
						onChange={handleChange}
					>
						{arrProjectCategory.map((item, index) => {
							return (
								<option value={item.id} key={index}>
									{item.projectCategoryName}
								</option>
							);
						})}
					</select>
				</div>
				<button className="btn btn-success">Create Project</button>
			</form>
		</div>
	);
}

const createProjectForm = withFormik({
	enableReinitialize: true,
	mapPropsToValues: (props) => {
		console.log(props);
		return {
			projectName: '',
			description: '',
			categoryId: props.arrProjectCategory[0]?.id,
		};
	},

	handleSubmit: (values, { props, setSubmitting }) => {
		props.dispatch({ type: 'CREATE_PROJECT_SAGA', newProject: values });
	},
	displayName: 'CreateProjectFormik',
})(CreateProject);

const mapStateToProps = (state) => {
	return {
		arrProjectCategory: state.ProjectCategoryReducer.arrProjectCategory,
	};
};

export default connect(mapStateToProps)(createProjectForm);
