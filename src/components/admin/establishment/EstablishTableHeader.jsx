import {  useContext } from 'react';
import EstablishmentsContext from '../../contexts/EstablishmentsContext';

const EstablishTableHeader = () => {
	const context = useContext(EstablishmentsContext);
	const [state] = context;

	return (
		<thead>
			{state.establishments.length > 0 ? (
				<>
				
				
				</>
			) : null}
		</thead>
	);
};

export default EstablishTableHeader;
