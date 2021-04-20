import {useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form"; //
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


//Components
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { BASE_URL, ENQUIRIES_PATH } from '../../constants/api';
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

const EnquiryForm = ({ id, stringId, name}) => {
   
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [serverError, setServerError] = useState(null);
    
    let initialState = { startDate: null, endDate: null}
	const [dateRange, setDateRange] = useState(initialState);
    
      const handleOnDateChange = (startDate, endDate) => {
        setDateRange(startDate, endDate);
      }
        
    const url = BASE_URL + ENQUIRIES_PATH;

    const { register, handleSubmit, errors } = useForm({ 
		resolver: yupResolver(schema),
	});

   
    const onSubmit = async(data) => {
        setSuccessMsg(true);
        setServerError(null);

        data.establishment = name
       

        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
            setTimeout(()=> {
                setSuccessMsg(false)
                }, 2500)
        } catch (error) {
            console.log("error", error);
            setServerError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section key={id}>
            <h4 className="form__title heading--h4">Enter your details</h4>
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group >
                    {serverError && <ErrorMsg>{serverError}</ErrorMsg>}
                    {successMsg && <SuccessMsg>Booking is successfully sent</SuccessMsg>}
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
                                    <Form.Control type="date" name='fromDate' value={dateRange.startDate} onChange={handleOnDateChange} ref={register} />
                                </Col>
                                <Col sm={6}>
                                    <Form.Control type="date" name='toDate' value={dateRange.endDate} onChange={handleOnDateChange} ref={register} />
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
                            <Button label={submitting ? "Completing booking..." : "Complete booking"} type="form__btn button--blue button--hover" />
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        </section>
       
    )
}

export default EnquiryForm;
