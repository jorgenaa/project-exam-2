import { useContext } from 'react'; //useEffect
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { AiFillCloseCircle } from 'react-icons/ai';

//Components
import EstablishmentsContext from '../../contexts/EstablishmentsContext';
import Button from '../../common/Button';
import SubHeading from '../../common/SubHeading';
import ErrorMsg from '../../common/ErrorMsg';
import SuccessMsg from '../../common/SuccessMsg';

const schema = yup.object().shape({
	// name: yup.string().required('Name is required'),
	// email: yup
	// 	.string()
	// 	.email('Please enter a valid email')
	// 	.required('Email is required'),
	// price: yup.number().required('Please provide a valid number'),
	// maxGuests: yup.number().required('Please provide a valid number'),
	// roomType: yup.string().required('Select a room type'),
	// imgUrl: yup
	// 	.mixed()
	// 	.required('You need to provide a jpg file')
	// 	.test('filesize', 'The file is too large', value => {
	// 		return value && value[0].size < 180000;
	// 	})
	// 	.test('type', 'We only support jpg', value => {
	// 		return value && value[0].type === 'image/jpeg';
	// 	}),
	// imgsUrl: yup
	// 	.mixed()
	// 	.required('You need to provide 4 jpg files')
	// 	.test('filesize', 'The files are too large', value => {
	// 		return value && value[0].size < 180000;
	// 	})
	// 	.test('type', 'We only support jpg', value => {
	// 		return value && value[0].type === 'image/jpeg';
	// 	}),
	// imgsMobileUrl: yup
	// 	.mixed()
	// 	.required('You need to provide 5 jpg files')
	// 	.test('filesize', 'The files are too large', value => {
	// 		return value && value[0].size < 300000;
	// 	})
	// 	.test('type', 'We only support jpg', value => {
	// 		return value && value[0].type === 'image/jpeg';
	// 	}),
	// facilityIcons: yup
	// 	.mixed()
	// 	.required('The file must contain an id, name and cssClass of the icons')
	// 	.test('type', 'We only support JSON', value => {
	// 		return value && value[0].type === 'application/json';
	// 	}),
	// bookingIncludes: yup
	// 	.mixed()
	// 	.required('You need to provide JSON file including id & name')
	// 	.test('type', 'We only support JSON', value => {
	// 		return value && value[0].type === 'application/json';
	// 	}),
	// popularFacilityIcons: yup
	// 	.mixed()
	// 	.required('The file must contain an id, name and cssClass of the icons')
	// 	.test('type', 'We only support JSON', value => {
	// 		return value && value[0].type === 'application/json';
	// 	}),
	// stars: yup
	// 	.mixed()
	// 	.required('The file must contain an id, name and cssClass of the icon')
	// 	.test('type', 'We only support JSON', value => {
	// 		return value && value[0].type === 'application/json';
	// 	}),
	// description: yup.string().required('A description is required'),
});

const EstablishmentForm = () => {
	const context = useContext(EstablishmentsContext);
	const [state, , addEstablishment] = context;
	let history = useHistory();

	const { register, handleSubmit, errors, reset } = useForm({
		resolver: yupResolver(schema),
	});

	//Read the content of the JSON files with new FileReader method
	const processFile = file => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();

			reader.onload = e => {
				resolve(JSON.parse(e.target.result));
			};
			//onerror event handler invokes eventtarget addEventListener whenever an error occurs on the FileRader method.
			reader.onerror = reject;

			//read content of JSON files
			reader.readAsText(file);
		});
	};

	const handleAddEstablishment = async data => {
		const formData = new FormData();

		formData.append('files.imgUrl', data.imgUrl[0], data.imgUrl[0].name);

		for (const file of data.imgsUrl) {
			//delete data.imgsUrl;
			formData.append('files.imgsUrl', file, file.name);
		}

		for (const file of data.imgsMobileUrl) {
			//delete data.imgsMobileUrl;
			formData.append('files.imgsMobileUrl', file, file.name);
		}

		data.bookingIncludes = await processFile(data.bookingIncludes[0]);
		data.popularFacilityIcons = await processFile(data.popularFacilityIcons[0]);
		data.facilityIcons = await processFile(data.facilityIcons[0]);
		data.stars = await processFile(data.stars[0]);

		formData.append(
			'data',
			JSON.stringify({
				name: data.name,
				email: data.email,
				price: data.price,
				maxGuests: data.maxGuests,
				roomType: data.roomType,
				facilityIcons: data.facilityIcons,
				bookingIncludes: data.bookingIncludes,
				popularFacilityIcons: data.popularFacilityIcons,
				stars: data.stars,
				description: data.description,
			})
		);

		console.log(formData.getAll('data'));

		//Pass data from input fields to body
		addEstablishment(formData);

		//reset input fields
		reset(addEstablishment);
	};

	const handleClose = () => history.push('/establishment');

	return (
		<main>
			<section className="inbox__header-section">
				<SubHeading content="Establishment Form" />
			</section>
			<section>
				<Form className="form" onSubmit={handleSubmit(handleAddEstablishment)}>
					<div className="form__header">
						<h3 className="form__title heading--h3">Add Establishment</h3>
						<AiFillCloseCircle className="form__close" onClick={handleClose} />
					</div>

					<Form.Row>
						<Col lg={6} md={6} sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">Name</Form.Label>
								<Form.Control
									className="form__input"
									name="name"
									ref={register}
								/>
								{errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
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
								{errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
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
								{errors.price && <ErrorMsg>{errors.price.message}</ErrorMsg>}
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
								{errors.maxGuests && (
									<ErrorMsg>{errors.maxGuests.message}</ErrorMsg>
								)}
							</Form.Group>
						</Col>
						<Col lg={6} md={6} sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label ml-2">
									Self Catering
								</Form.Label>
								<input
									className="form__checkbox"
									name="selfcatering"
									type="checkbox"
									value={false}
									ref={register}
								/>
							</Form.Group>
						</Col>
						<Col lg={6} md={6} sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">Room Type</Form.Label>
								<Form.Control
									as="select"
									name="roomType"
									ref={register}
									defaultValue="Select type of accommodation..."
								>
									<option className="form__option form__option--hover">
										Standard Double Room
									</option>
									<option>Quen</option>
									<option>King</option>
									<option>Quad</option>
									<option>Cottage</option>
								</Form.Control>
								{errors.roomType && (
									<ErrorMsg>{errors.roomType.message}</ErrorMsg>
								)}
							</Form.Group>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col md={4} sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">Main Image</Form.Label>
								<Form.File name="imgUrl" ref={register} />
								{errors.imgUrl && <ErrorMsg>{errors.imgUrl.message}</ErrorMsg>}
							</Form.Group>
						</Col>
						<Col md={4} sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">Images</Form.Label>
								<Form.File multiple name="imgsUrl" ref={register} />
								{errors.imgsUrl && (
									<ErrorMsg>{errors.imgsUrl.message}</ErrorMsg>
								)}
							</Form.Group>
						</Col>
						<Col md={4} sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">
									Images for mobile view
								</Form.Label>
								<Form.File multiple name="imgsMobileUrl" ref={register} />
								{errors.imgsMobileUrl && (
									<ErrorMsg>{errors.imgsMobileUrl.message}</ErrorMsg>
								)}
							</Form.Group>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">
									Star icons in JSON format(FontAwesomeIcon)
								</Form.Label>
								<Form.File name="stars" ref={register} />
								{errors.stars && <ErrorMsg>{errors.stars.message}</ErrorMsg>}
							</Form.Group>
						</Col>
						<Col sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">
									Facility icons in JSON format(FontAwesomeIcon)
								</Form.Label>
								<Form.File
									accept="application/JSON"
									name="facilityIcons"
									ref={register}
								/>
								{errors.facilityIcons && (
									<ErrorMsg>{errors.facilityIcons.message}</ErrorMsg>
								)}
							</Form.Group>
						</Col>
						<Col sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">
									Booking includes icons in JSON format(FontAwesomeIcon)
								</Form.Label>
								<Form.File name="bookingIncludes" ref={register} />
								{errors.bookingIncludes && (
									<ErrorMsg>{errors.bookingIncludes.message}</ErrorMsg>
								)}
							</Form.Group>
						</Col>
						<Col sm={6} xs={12}>
							<Form.Group>
								<Form.Label className="form__label">
									Popular facility icons in JSON format(FontAwesomeIcon)
								</Form.Label>
								<Form.File name="popularFacilityIcons" ref={register} />
								{errors.popularFacilityIcons && (
									<ErrorMsg>{errors.popularFacilityIcons.message}</ErrorMsg>
								)}
							</Form.Group>
						</Col>
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
						{errors.description && (
							<ErrorMsg>{errors.description.message}</ErrorMsg>
						)}
					</Form.Group>
					<Form.Group>
						{state.serverError && <ErrorMsg>{state.serverError}</ErrorMsg>}
						{state.successMsg && <SuccessMsg>Establishment is sent</SuccessMsg>}
					</Form.Group>
					<Form.Row>
						<Col sm={3} xs={12}>
							<Form.Group>
								<Button
									type="form__btn button--blue button--hover"
									label={state.loading ? 'Submitting...' : 'Submit'}
								></Button>
							</Form.Group>
						</Col>
					</Form.Row>
				</Form>
			</section>
		</main>
	);
};

export default EstablishmentForm;
