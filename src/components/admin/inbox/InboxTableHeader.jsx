import { useContext } from 'react';
import MessagesContext from '../../contexts/MessagesContext';

const InboxTableHeader = () => {
	const context = useContext(MessagesContext);
	const [state] = context;

	return (
		<thead>
			{state.messages.length > 0 ? (
				<tr>
					<th>Delete</th>
					<th>Name</th>
					<th>Email</th>
					<th>Message</th>
				</tr>
			) : null}
		</thead>
	);
};

export default InboxTableHeader;
