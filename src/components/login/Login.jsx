
import LoginForm from "./LoginForm";
import SubHeading from '../common/SubHeading';

export default function Login() {
	return (
		<main>
			<div className="w-600px">
				<SubHeading content="Login" />
			</div>
			<LoginForm />
		</main>
	);
}
