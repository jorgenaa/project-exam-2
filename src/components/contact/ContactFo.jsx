import { useReducer } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

//Components
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { BASE_URL } from '../constants/api';
import { KEY } from '../constants/key';
import ErrorMsg from '../common/ErrorMsg';
import SuccessMsg from '../common/SuccessMsg';

const initialState = {
	nameValue: '',
	messageValue: '',
	submitting: false,
	successMsg: false,
	serverError: null,
};

function contactFormReducer(state, action) {
	switch (action.type) {
		case 'field': {
			return { ...state, [action.field]: action.value };
		}
		case 'submitting': {
			return { ...state, submitting: true };
		}
		case 'submitted': {
			return { ...state, submitting: false };
		}
		case 'success': {
			return {
				...state,
				successMsg: true,
				nameValue: '',
				//lastNameValue: "",
				emailValue: '',
				messageValue: '',
			};
		}
		case 'error': {
			return { ...state, serverError: action.payload, successMsg: false };
		}
		default:
			return state;
	}
}

const ContactFo = () => {
	const [state, dispatch] = useReducer(contactFormReducer, initialState);
	const { nameValue, emailValue, messageValue } = state;

	const schema = yup.object().shape({
		name: yup.string().required('Name is required'),
		//lastname: yup.string().required("Last name is required"),
		email: yup
			.string()
			.email('Please enter a valid email')
			.required('Email is required'),
		message: yup.string().required('Message is required'),
	});

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const data = {
		name: nameValue,
		email: emailValue,
		message: messageValue,
	};

	const url = BASE_URL + 'contacts';

	const onSubmit = async () => {
		// setSubmitting(true);
		dispatch({ type: 'error' });

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				key: KEY,
			},
			body: JSON.stringify(data),
		})
			.then(data => data.json())
			.then(() => {
				dispatch({ type: 'success' });
			})
			.then(() => {
				setTimeout(() => {
					dispatch({ type: 'submitted' });
				}, 1500);
			})
			.catch(error => {
				console.log('error', error);
				dispatch({ type: 'error', payload: error.toString() });
				dispatch({ type: 'submitted' });
			})
			.finally(() => dispatch({ type: 'submitted' }));
	};

	return (
		<section className="form--contact">
			<Form className="form" onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					{dispatch({ type: 'error' }) && (
						<ErrorMsg>{dispatch({ type: 'error' })}</ErrorMsg>
					)}
					{dispatch({ type: 'success' }) && (
						<SuccessMsg>Message is sent</SuccessMsg>
					)}
				</Form.Group>
				<Form.Row>
					<Col lg={6} md={6} sm={6} xs={12}>
						<Form.Group>
							<Form.Label className="form__label">Name</Form.Label>
							<Form.Control
								className="form__input"
								onChange={event =>
									dispatch({
										type: 'field',
										field: 'name',
										value: event.currentTarget.value,
									})
								}
								name="name"
								type="text"
								placeholder="Name"
								ref={register}
							/>
							{errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
						</Form.Group>
					</Col>
					<Col lg={6} md={6} sm={6} xs={12}>
						{/* <Form.Group>
                            <Form.Label className="form__label">Last Name</Form.Label>
                            <Form.Control className="form__input" onChange={event => setLastNameValue(event.target.value)} value={lastNameValue} type="text" placeholder="Last Name" ref={register} />
                            {errors.lastname && <ErrorMsg>{errors.lastname.message}</ErrorMsg>}
                        </Form.Group> */}
					</Col>
				</Form.Row>
				<Form.Row>
					<Col lg={6} md={6} sm={6} xs={12}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label className="form__label">Email address</Form.Label>
							<Form.Control
								className="form__input"
								onChange={event =>
									dispatch({
										type: 'field',
										field: 'email',
										value: event.currentTarget.value,
									})
								}
								name="email"
								type="email"
								placeholder="Enter email"
								ref={register}
							/>
							{errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Group>
					<Form.Label className="form__label">Message</Form.Label>
					<Form.Control
						className="form__textField"
						as="textarea"
						onChange={event =>
							dispatch({
								type: 'field',
								field: 'message',
								value: event.currentTarget.value,
							})
						}
						name="message"
						rows={5}
						ref={register}
					/>
					{errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
				</Form.Group>
				<Form.Row>
					<Col sm={6} xs={12}>
						<Form.Group>
							<button className="form__btn">
								{dispatch({ type: 'submitting' }) ? 'Submitting...' : 'Submit'}
							</button>
						</Form.Group>
					</Col>
				</Form.Row>
			</Form>
		</section>
	);
};

export default ContactFo;
