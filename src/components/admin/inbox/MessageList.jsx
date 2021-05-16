import { IoTrashBinSharp } from 'react-icons/io5';

const MessageList = ({ state, deleteMessages }) => {
	if (state.messages.length === 0) {
		return (
			<tbody>
				<tr>
					<td>No messages</td>
				</tr>
			</tbody>
		);
	}

	return (
		<tbody>
			{state.messages.map(msg => {
				const { clientName, email, message, id } = msg;
				console.log(typeof(id))
				return (
					<tr className="table__row--border-bottom" key={id}>
						<td>
							<IoTrashBinSharp
								className="table__trash table__trash--hover"
								onClick={()=> deleteMessages(id)}
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
