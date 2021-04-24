import LogoIcon from '../../assets/logo/logo_transparent.svg';
import { NavLink } from 'react-router-dom';

const Logo = () => {
	return (
		<div className="logo">
			<NavLink to="/">
				<img className="logo__item" src={LogoIcon} alt="logo" />
			</NavLink>
		</div>
	);
};

export default Logo;
