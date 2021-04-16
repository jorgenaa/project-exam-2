import Logo from './Logo';

//Components
import Nav from './nav/Nav';
import SearchBar from '../common/SearchBar';

const Header = () => {
	return (
		<header className="header">
			<div className="header__layout">
				<Logo />
			
				<Nav />
			</div>
			<section className="searchBar">
				<SearchBar />
			</section>
		</header>
	);
};

export default Header;
