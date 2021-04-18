import { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//Components
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { BASE_URL, INBOX_PATH } from '../../constants/api'; 
import ErrorMsg from "../common/ErrorMsg";
import SuccessMsg from '../common/SuccessMsg';
//import useAxios from "../../hooks/useAxios";
import Button from '../common/Button';

const schema = yup.object().shape({
    clientName: yup.string().required("Name is required"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    message: yup.string().required("Message is required")
 });

const ContactForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [serverError, setServerError] = useState(null);

    //const http = useAxios();
    const url = BASE_URL + INBOX_PATH;

    const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});
        
    async function onSubmit(data) {
        setSubmitting(true);
        setServerError(null);
        

        try {
            const response = await axios.post(url, data);
                console.log(response.data);
                setSuccessMsg(true);
            if(response.ok) {
                setTimeout(()=> {
                    setSuccessMsg(false)
                }, 1500)
            }
        } catch (error) {
            console.log("error", error);
            setServerError(error.toString());
        }finally { 
             setSubmitting(false)
         }
    }
   
    return (
        <section className="w-600px">
            <form className="form" onSubmit={handleSubmit(onSubmit)} >
                <div >
                    {serverError && <ErrorMsg>{serverError}</ErrorMsg>} 
                    {successMsg && <SuccessMsg>Message is sent</SuccessMsg>}
                </div>
                <fieldset disabled={submitting}> 
                    <Form.Row>
                        <Col lg={6} md={6} sm={6} xs={12}>
                            <Form.Group>
                                <Form.Label className="form__label">Full Name</Form.Label>
                                <Form.Control className="form__Form.Control" name="clientName" placeholder="Fullname" ref={register} />
                                 {errors.clientName && <ErrorMsg>{errors.clientName.message}</ErrorMsg>}
                            </Form.Group>
                        </Col>
                    </Form.Row> 
                    <Form.Row> 
                        <Col lg={6} md={6} sm={6} xs={12}> 
                            <Form.Group>
                                <Form.Label className="form__label">Email address</Form.Label>
                                <Form.Control className="form__Form.Control" name="email" placeholder="Enter email" ref={register} />
                                {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                            </Form.Group>
                        </Col>
                    </Form.Row> 
                        <Form.Group>
                            <Form.Label className="form__label">Message</Form.Label>              
                            <Form.Control className="form__textField" as="textarea" name="message" rows={5} ref={register} />
                            {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
                        </Form.Group>
                    <Form.Row>
                        <Col sm={6} xs={12}> 
                            <Form.Group>
                                <Button label={submitting ? "Submitting..." : "Submit"} type="form__btn button--blue button--hover" />
                            </Form.Group>
                        </Col>
                    </Form.Row> 
                </fieldset>
              
            </form>
        </section>
    )
}

export default ContactForm;
