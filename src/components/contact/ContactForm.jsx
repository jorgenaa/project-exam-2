import {  useContext } from 'react'; 
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

//Components

import MessagesContext from '../contexts/MessagesContext'
import ErrorMsg from '../common/ErrorMsg';
import SuccessMsg from '../common/SuccessMsg';
import Button from '../common/Button';

const schema = yup.object().shape({
	clientName: yup.string().required('Name is required'),
	email: yup
		.string()
		.email('Please enter a valid email')
		.required('Email is required'),
	message: yup.string().required('Message is required'),
});

const ContactForm = () => {
	const context = useContext(MessagesContext);
	const [state, , sendMsg, ] = context;

	const { register, handleSubmit, errors, reset  } = useForm({
		resolver: yupResolver(schema),
	});

	const handleAddMessage = async (data) => {
		sendMsg(data);
		reset(sendMsg);
	} 

	return (
		<section className="w-600px">
			<form className="form" onSubmit={handleSubmit(handleAddMessage)}>
				<div>
					{state.serverError && <ErrorMsg>{state.serverError}</ErrorMsg>}
					{state.successMsg && <SuccessMsg>Message is sent</SuccessMsg>}
				</div>
				<fieldset disabled={state.submitting}>
					<Form.Row>
						<Col lg={6} md={6} sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">Full Name</Form.Label>
								<Form.Control
									className="form__Form.Control"
									name="clientName"
									placeholder="Fullname"
									ref={register}
								/>
								{errors.clientName && (
									<ErrorMsg>{errors.clientName.message}</ErrorMsg>
								)}
							</Form.Group>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col lg={6} md={6} sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">Email address</Form.Label>
								<Form.Control
									className="form__Form.Control"
									name="email"
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
							name="message"
							rows={5}
							ref={register}
						/>
						{errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
					</Form.Group>
					<Form.Row>
						<Col sm={6} xs={12}>
							<Form.Group>
								<Button
									label={state.submitting ? 'Submitting...' : 'Submit'}
									type="form__btn button--blue button--hover"
								/>
							</Form.Group>
						</Col>
					</Form.Row>
				</fieldset>
			</form>
		</section>
	);
};

export default ContactForm;
