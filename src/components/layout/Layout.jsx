import { Switch, Route } from 'react-router-dom';

//Components
import Home from '../home/Home';
import ResultsPage from '../results-page/Results';
import Specific from '../specific-page/Specific';
import Enquiry from '../enquiry-page/Enquiry';
import Contact from '../contact/Contact';
import Login from '../login/Login';
import EnquiryAdminPage from '../admin/enquiry/EnquiryAdminPage';
import Establishment from '../admin/establishment/Establishment ';
import EstablishmentForm from '../admin/establishment/form/EstablishmentForm';
import Inbox from '../admin/inbox/Inbox';

const Layout = () => {
	return (
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/results" component={ResultsPage} />
				<Route path="/specific/:id" component={Specific} />
				<Route path="/enquiry/:id" component={Enquiry} />
				<Route path="/contact" component={Contact} />
				<Route path="/login" component={Login} />
				<Route path="/enquiryadmin" component={EnquiryAdminPage} />
				<Route path="/establishment" component={Establishment} />
				<Route path="/establishmentForm" component={EstablishmentForm} />
				<Route path="/inbox" component={Inbox} />
			</Switch>
	);
};
export default Layout;
