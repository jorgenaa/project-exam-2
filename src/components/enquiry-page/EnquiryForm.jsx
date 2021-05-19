import { useContext } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form"; 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

//Components
import { BASE_URL, ENQUIRIES_PATH } from '../../constants/api';
import EnquiriesContext from '../contexts/EnquiriesContext'
import { ADD_ENQUIRY, ERROR, SUCCESS, SUBMITTING } from '../contexts/EnquiriesContext';
import ErrorMsg from "../common/ErrorMsg";
import SuccessMsg from '../common/SuccessMsg';
import Button from '../common/Button';

const schema = yup.object().shape({
	firstName: yup.string().required("Please enter your username"),
    lastName: yup.string().required("Please enter your lastname"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    fromDate: yup.string().required("Please select a valid start date"),
    toDate: yup.string().required("Please select a valid end date")
});

const EnquiryForm = ({ id, name, fromDate, toDate, handleOnDateChangeStart, handleOnDateChangeEnd}) => {
    const context = useContext(EnquiriesContext);
	const [state, dispatch, ] = context;
   
    const url = BASE_URL + ENQUIRIES_PATH;

    const { register, handleSubmit, errors, reset } = useForm({ 
		resolver: yupResolver(schema),
	});

    const onSubmit = async(data) => {
        dispatch({ type: SUBMITTING, payload: true})
		dispatch({ type: ERROR, payload: null});

        data.establishment = name
       
        try {
            const response = await axios.post(url, data);
            dispatch({ type: SUCCESS, payload: true});
            const { status } = response;
			if (status === 200){
                dispatch({ type: ADD_ENQUIRY, payload: response.data})
				setTimeout(() => {
					dispatch({ type: SUCCESS, payload: false});
					reset(response);
				}, 1000);
			}
        } catch (error) {
            console.log("error", error);
            dispatch({ type: ERROR, payload: error.toString()});
        } finally {
            dispatch({ type: SUBMITTING, payload: false})
        }
    }

    return (
        <section key={id}>
           
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h4 className="form__title heading--h4">Enter your details</h4>
                <Form.Group >
                    {state.serverError && <ErrorMsg>{state.serverError}</ErrorMsg>}
                    {state.successMsg && <SuccessMsg>Booking is successfully sent</SuccessMsg>}
                </Form.Group>
                <Form.Row>
                    <Col sm={6} xs={12}>
                        <Form.Group>
                            <Form.Label className="form__label">First Name</Form.Label>
                            <Form.Control className="form__input" name="firstName" type="text" placeholder="First Name" ref={register} />
                            {errors.firstName && <ErrorMsg>{errors.firstName.message}</ErrorMsg>}
                        </Form.Group>
                    </Col>
                    <Col sm={6} xs={12}>
                        <Form.Group>
                            <Form.Label className="form__label">Last Name</Form.Label>
                            <Form.Control className="form__input" name="lastName" placeholder="Last Name" ref={register} />
                            {errors.lastName && <ErrorMsg>{errors.lastName.message}</ErrorMsg>}
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col sm={6} xs={12}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form__label">Email address</Form.Label>
                            <Form.Control className="form__input" name="email" type="email" placeholder="Email" ref={register} />
                            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={12}>
                        <Form.Group>
                            <Form.Label className="form__label">Check inn - Check out</Form.Label> 
                            <Form.Row>
                                <Col sm={6}>
                                    <Form.Control type="date" name='fromDate' value={fromDate.startDate} onChange={handleOnDateChangeStart} ref={register} />
                                </Col>
                                <Col sm={6}>
                                    <Form.Control type="date" name='toDate' value={toDate.endDate} onChange={handleOnDateChangeEnd} ref={register} />
                                </Col>
                            </Form.Row>    
                            {errors.fromDate && <ErrorMsg>{errors.fromDate.message}</ErrorMsg>}
                            {errors.toDate && <ErrorMsg>{errors.toDate.message}</ErrorMsg>}
                        </Form.Group>
                    </Col> 
                </Form.Row>
                <Form.Row>
                    <Col sm={6} xs={12}>
                        <Form.Group>
                            <Button label={state.submitting ? "Completing booking..." : "Complete booking"} type="form__btn button--yellow button--hover" />
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        </section>
    )
}

export default EnquiryForm;
