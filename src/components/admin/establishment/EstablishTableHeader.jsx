import {  useContext } from 'react';
import EstablishmentsContext from '../../contexts/EstablishmentsContext';

const EstablishTableHeader = () => {
	const context = useContext(EstablishmentsContext);
	const [state] = context;

	return (
		<thead>
			{state.establishments.length > 0 ? (
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Price</th>
					<th>Max guests</th>
					<th>Self catering</th>
					<th>Description</th>
				</tr>
			) : null}
		</thead>
	);
};

export default EstablishTableHeader;
