import { useContext } from 'react';
import EnquiriesContext from '../../contexts/EnquiriesContext';

const EnquiriesTableHeader = () => {
	const context = useContext(EnquiriesContext);
	const [state] = context;

	return (
		<thead>
		{state.enquiries.length > 0 ? (
			<tr>
				<th>Delete</th>
				<th>Establishment</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Email</th>
				<th>Check in</th>
				<th>Check out</th>
			</tr>): null}
		</thead>
	);
};

export default EnquiriesTableHeader;
