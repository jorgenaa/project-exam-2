import SubHeading from '../../common/SubHeading';
import InboxTableHeader from './InboxTableHeader';
import TableSection from '../../common/TableSection';
import MessageList from './MessageList';
import DeleteMessageBtn from './DeleteMessageBtn';

const Inbox = () => {
	return (
		<main className="inbox">
			<section className="inbox__header-section">
				<SubHeading content="Inbox messages" />

				<div className="inbox__header-btn">
					<DeleteMessageBtn />
				</div>
			</section>
			<TableSection className="table-section">
				<table>
					<InboxTableHeader />
					<MessageList />
				</table>
			</TableSection>
		</main>
	);
};

export default Inbox;
