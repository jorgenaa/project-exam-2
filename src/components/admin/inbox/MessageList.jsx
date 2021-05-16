import { IoTrashBinSharp } from 'react-icons/io5';
import axios from 'axios';

import { BASE_URL, INBOX_PATH } from '../../../constants/api';
const MessageList = ({ REMOVE_MESSAGES, state, dispatch }) => {
	if (state.messages.length === 0) {
		return (
			<tbody>
				<tr>
					<td>No messages</td>
				</tr>
			</tbody>
		);
	}

	// const handleDeleteMessage = async id => {
	// 	deleteMessages(id);
	// 	dispatch({ type: REMOVE_MESSAGES, payload: id });
	// };
	const url = BASE_URL + INBOX_PATH;
	async function deleteMessages(id) {
		try {
			await axios.delete(url + '/' + id);
			dispatch({ type: REMOVE_MESSAGES, payload: id });
		} catch(error){
			console.log(error)
		}
	
		//const { status } = res;
		
		// if (res.status === 200) {
		// 	dispatch({ type: REMOVE_MESSAGES, payload: id });
		// }
	}

	return (
		<tbody>
			{state.messages.map(msg => {
				const { clientName, email, message, id } = msg;
				
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
