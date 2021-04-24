import { BrowserRouter as Router } from 'react-router-dom';
import './sass/styles.scss';

//Components
import { HotelProvider } from './components/contexts/HotelContext';
import { AuthProvider } from './components/contexts/AuthContext';
import { MessagesProvider } from './components/contexts/MessagesContext';
import { EnquiriesProvider } from './components/contexts/EnquiriesContext';
import { EstablishmentsProvider } from './components/contexts/EstablishmentsContext';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
//import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<HotelProvider>
					<div className="sticky-container">
						<div className="wrapper">
							<Header />
							<EnquiriesProvider>
								<MessagesProvider>
									<EstablishmentsProvider>
										{/* <ErrorBoundary> */}
										<Layout />
										{/* </ErrorBoundary> */}
									</EstablishmentsProvider>
								</MessagesProvider>
							</EnquiriesProvider>
						</div>
						<Footer />
					</div>
				</HotelProvider>
			</Router>
		</AuthProvider>
	);
};

export default App;
