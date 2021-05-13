import { IoTrashBinSharp } from 'react-icons/io5';

const MessageList = ({ state, deleteMessages }) => { //REMOVE_MESSAGES dispatch
	if (state.messages.length === 0) {
		return (
			<tbody>
				<tr>
					<td>No messages</td>
				</tr>
			</tbody>
		);
	}

	const handleDeleteMessage = async id => {
		deleteMessages(id);
		//dispatch({ type: REMOVE_MESSAGES });
	};

	return (
		<tbody>
			{state.messages.map(msg => {
				const { clientName, email, message, id } = msg;

				return (
					<tr className="table__row--border-bottom" key={id}>
						<td>
							<IoTrashBinSharp
								className="table__trash table__trash--hover"
								onClick={() => handleDeleteMessage(id)}
							/>
						</td>
						<td>{clientName}</td>
						<td>{email}</td>
						<td>{message}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default MessageList;
