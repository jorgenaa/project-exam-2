import {useState} from 'react';
//import axios from 'axios';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import 'react-dates/lib/css/_datepicker.css';

//Components
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import DatePicker from './DatePicker';
import {  POST_ENQ_PATH } from '../../constants/api'; //BASE_URL,
import useAxios from "../../hooks/useAxios";
//import { getAuth } from '../../localStorage/getLocalStorage';
import ErrorMsg from "../common/ErrorMsg";
import SuccessMsg from '../common/SuccessMsg';
import Button from '../common/Button';

const schema = yup.object().shape({
	clientName: yup.string().required("Please enter your username"),
    lastName: yup.string().required("Please enter your lastname"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
   
});

const EnquiryForm = ({ id, dateRange, setDateRange}) => {
   
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [serverError, setServerError] = useState(null);

    const http = useAxios();
    //const url = BASE_URL + POST_ENQ_PATH;

    //const token = getAuth();

    const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

    // const data = {
    //     //"establishment": ,
    //     "clientName": nameValue,
    //     "email": emailValue,
    //     "hotel_id": id,
    //     "from_date": dateRange.startDate,
    //     "to_date": dateRange.endDate
    // };
   
    const onSubmit = async(data) => {
        setSuccessMsg(true);
        setServerError(null);

        data.status = "publish";

        try {
            const response = await http.post(POST_ENQ_PATH, data);
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
                            <Form.Control className="form__input" name="firstname" type="text" placeholder="First Name" ref={register} />
                            {errors.firstname && <ErrorMsg>{errors.firstname.message}</ErrorMsg>}
                        </Form.Group>
                    </Col>
                    <Col sm={6} xs={12}>
                        <Form.Group>
                            <Form.Label className="form__label">Last Name</Form.Label>
                            <Form.Control className="form__input" name="lastName" placeholder="Last Name" ref={register} />
                            {errors.firstname && <ErrorMsg>{errors.firstname.message}</ErrorMsg>}
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
                            <DatePicker 
                                        dateRange={dateRange} 
                                        setDateRange={setDateRange}
                                        /> 
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
