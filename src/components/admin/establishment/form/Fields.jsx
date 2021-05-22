import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import ErrorMsg from '../../../common/ErrorMsg';

export const Fields = ({ errors, register }) => {
	return (
		<>
			<Form.Row>
				<Col lg={6} md={6} sm={6} xs={12}>
					<Form.Group>
						<Form.Label className="form__label">Name</Form.Label>
						<Form.Control className="form__input" name="name" ref={register} />
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
						<Form.Control className="form__input" name="price" ref={register} />
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
						<Form.Label className="form__label ml-2">Self Catering</Form.Label>
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
						{errors.roomType && <ErrorMsg>{errors.roomType.message}</ErrorMsg>}
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
						{errors.imgsUrl && <ErrorMsg>{errors.imgsUrl.message}</ErrorMsg>}
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
		</>
	);
};
