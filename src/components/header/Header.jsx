import Logo from './Logo';

//Component
import Nav from './nav/Nav';

const Header = () => {
	return (
		<header className="header">
			<div className="header__layout">
				<Logo />
				<Nav />
			</div>
		</header>
	);
};

export default Header;
