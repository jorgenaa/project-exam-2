import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { AiFillCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';

//Components
import EstablishmentsContext from '../../contexts/EstablishmentsContext';
import { ADD_ESTABLISHMENT } from '../../contexts/EstablishmentsContext'; 
import Button from '../../common/Button';
import ErrorMsg from '../../common/ErrorMsg';
import SuccessMsg from '../../common/SuccessMsg';

const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	email: yup.string().email('Please enter a valid email').required('Email is required'),
	price: yup.number().required('Please provide a valid number'),
	maxGuests: yup.number().required('Please provide a valid number'),
	
});

const EstablishmentForm = ({ show, setShow }) => {
	const context = useContext(EstablishmentsContext);
	const [state, dispatch, , addEstablishment ] = context; 
	
	const { register, handleSubmit, errors, reset } = useForm({ 
		resolver: yupResolver(schema),
	});
	
	const handleAddEstablishment = async (data) => {
		addEstablishment(data);
		dispatch({ type: ADD_ESTABLISHMENT, payload: data });
		reset(addEstablishment);
	} 

	const handleClose = () => setShow(false);

	return (
		<Modal isOpen={show} className="Modal Overlay">
			<Form className="form" onSubmit={handleSubmit(handleAddEstablishment)}>
				<div className="form__header">
					<h3 className="form__title heading--h3">Add Establishment</h3>
					<AiFillCloseCircle className="form__close" onClick={handleClose} />
				</div>
				<Form.Group>
					{state.serverError && <ErrorMsg>{state.serverError}</ErrorMsg>}
                    {state.successMsg && <SuccessMsg>Establishment is sent</SuccessMsg>}
				</Form.Group>
				<Form.Row>
					<Col lg={6} md={6} sm={6} xs={12}>
						<Form.Group>
							<Form.Label className="form__label">Name</Form.Label>
							<Form.Control
								className="form__input"
								name="name"
								ref={register}
							/>
							{errors.name && (<ErrorMsg>{errors.name.message}</ErrorMsg>)}
						</Form.Group>
					</Col>
					<Col lg={6} md={6} sm={6} xs={12}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label className="form__label">Email address</Form.Label>
							<Form.Control
								className="form__input"
								name="email"
								type="email"
								ref={register}
							/>
							{errors.email && (<ErrorMsg>{errors.email.message}</ErrorMsg>)}
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col lg={6} md={6} sm={6} xs={12}>
						<Form.Group>
							<Form.Label className="form__label">Price</Form.Label>
							<Form.Control
								className="form__input"
								name="price"
								ref={register}
							/>
							{errors.price && (<ErrorMsg>{errors.price.message}</ErrorMsg>)}
						</Form.Group>
					</Col>
					<Col lg={6} md={6} sm={6} xs={12}>
						<Form.Group>
							<Form.Label className="form__label">Max Guests</Form.Label>
							<Form.Control
								className="form__input"
								name="maxGuests"
								type="text"
								ref={register}
							/>
							{errors.maxGuests && (<ErrorMsg>{errors.maxGuests.message}</ErrorMsg>)}
						</Form.Group>
					</Col>

					<Form.Group>
						<Form.Label className="form__label ml-2">Self catering</Form.Label>
						<input
							className="form__checkbox"
							name="selfcatering"
							type="checkbox"
							value={false}
							ref={register}
						/>
						
					</Form.Group>
				</Form.Row>
				<Form.Group>
					<Form.Label className="form__label">Description</Form.Label>
					<Form.Control
						className="form__textField"
						as="textarea"
						name="description"
						rows={5}
						ref={register}
					/>
				</Form.Group>
				<Form.Row>
					<Col sm={6} xs={12}>
						<Form.Group>
							<Button
								type="form__btn button--blue button--hover"
								label={state.loading ? "Submitting..." : "Submit"}
							></Button>
						</Form.Group>
					</Col>
				</Form.Row>
			</Form>
		</Modal>
	);
};

export default EstablishmentForm;
