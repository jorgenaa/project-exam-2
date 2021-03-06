import { useContext, useEffect, useState } from 'react';

//Components
import SubHeading from '../../common/SubHeading';
import ErrorMsg from '../../common/ErrorMsg';
import SuccessMsg from '../../common/SuccessMsg';
import InboxTableHeader from './InboxTableHeader';
import TableSection from '../../common/TableSection';
import MessageList from './MessageList';
import MessagesContext from '../../contexts/MessagesContext';
import { REMOVE_MESSAGES } from '../../contexts/MessagesContext';
import Button from '../../common/Button';

const Inbox = () => {
	const context = useContext(MessagesContext);
	const [state, dispatch, , deleteMessages] = context;
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(state.messages.length > 0);
	}, [state.messages.length]);

	let getAllIds = state.messages.map(msg => {
		const { id } = msg;
		return id;
	});

	let stringifyAllIds = JSON.stringify(getAllIds);
	let id = JSON.parse(stringifyAllIds);

	const handleDeleteAllMessages = () => {
		for (let i = 0; i < id.length; i++) {
			dispatch({ type: REMOVE_MESSAGES, payload: id[i] });
			deleteMessages(id[i]);
		}
	};

	return (
		<main className="inbox">
			<section className="inbox__header-section">
				<SubHeading content="Inbox messages" />
			</section>
			<section>
				{state.serverError && <ErrorMsg>{state.serverError}</ErrorMsg>}
				{state.successMsg && <SuccessMsg>Successfully deleted</SuccessMsg>}
			</section>
			{visible ? (
				<section>
					<Button
						type="button--red button--hover"
						handleClick={() => handleDeleteAllMessages()}
						label="Delete all messages"
					/>
				</section>
			) : null}

			<TableSection className="table-section">
				<table>
					<InboxTableHeader />
					<MessageList state={state} deleteMessages={deleteMessages} />
				</table>
			</TableSection>
		</main>
	);
};

export default Inbox;
