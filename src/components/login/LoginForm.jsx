import { useState, useContext } from "react"; 
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, TOKEN_PATH } from '../../constants/api';
import ErrorMsg from "../common/ErrorMsg";
import SuccessMsg from '../common/SuccessMsg';
import AuthContext from "../contexts/AuthContext";
import Button from '../common/Button';
import axios from "axios";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
    .min(4, "Password must be at least 4 characters long")
    .max(30, "Password must be less than 30")
 });


 const LoginForm = () => {
	const [submitting, setSubmitting] = useState(false);
	const [successMsg, setSuccessMsg] = useState(false);
	const [loginError, setLoginError] = useState(false);
	
	const history = useHistory();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const [, setAuth] = useContext(AuthContext);
	const url = BASE_URL + TOKEN_PATH;

	const onSubmit = async(data) => {
		setSubmitting(true);
		setLoginError(null);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setSuccessMsg(true)
			setAuth(response.data);
			setTimeout(()=> {
				//clearStorage();
				setSuccessMsg(false)
				history.push("/enquiryadmin/");
				}, 1500)
		} catch (error) {
			console.log("error", error);
			setLoginError(true);
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<section className="w-600px">
			<Form className="form" onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
						{loginError && <ErrorMsg>An error occured, credentials is incorrect</ErrorMsg>}
						{successMsg && <SuccessMsg>Successfully login</SuccessMsg>}
				</Form.Group>
				<fieldset disabled={submitting} >
					<Form.Group >
						<Form.Label className="form__label">Username</Form.Label>
						<Form.Control className="form__input" name="username" placeholder="Username" ref={register} />
						{errors.username && <ErrorMsg>{errors.username.message}</ErrorMsg>}
					</Form.Group>
					<Form.Group >
						<Form.Label className="form__label">Password</Form.Label>
						<Form.Control className="form__input" name="password" placeholder="Password" ref={register} type="password" />
						{errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
					</Form.Group>
					<Form.Row>
						<Col lg={6} md={6} sm={6} xs={12}> 
							<div>
								<Button label={submitting ? "Loggin in..." : "Login"} type="form__btn button--blue button--hover" />
							</div>
						</Col>
					</Form.Row> 
				</fieldset>
			</Form>
		</section>
	);
}

export default LoginForm;