import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Col from  'react-bootstrap/Col';
import Row from  'react-bootstrap/Row';
import Container from  'react-bootstrap/Container';

//import TwoColumns from '../common/TwoColumns';

const Footer = () => {
	

	return <footer className="footer">
				<Container>
					<Row>
						<Col xs={12} sm={6}>
							<ul className="footer__text">
								<li>Copyright 2021 – Jørgen Årnes</li>
								<li class="block">© All Rights Reserved</li>
							</ul>
						</Col>
						<Col xs={12} sm={6}>
							<ul className="footer__icons">
								<li className="footer__list-item"><a href="https://www.twitter.com"><FaTwitter className="footer__icon" /></a></li>
								<li className="footer__list-item"><a href="https://www.facebook.com" ><FaFacebookF className="footer__icon" /></a></li>
								<li><NavLink to="/contact/"><FiMail className="footer__icon" /></NavLink></li>
							</ul>
						</Col>
					</Row>
				</Container>
				
			</footer>;
};

export default Footer;
