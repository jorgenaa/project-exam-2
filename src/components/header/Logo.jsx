import LogoIcon from '../../assets/logo/logo_transparent.svg';
import { NavLink } from 'react-router-dom';

const Logo = () => {
	return (
		<h1 className="logo">
			<NavLink to="/">
				<img className="logo__item" src={LogoIcon} alt="logo" />
			</NavLink>
		</h1>
	);
};

export default Logo;
