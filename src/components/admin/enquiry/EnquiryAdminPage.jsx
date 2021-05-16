import { useContext, useEffect, useState } from 'react';
//Components
import SubHeading from '../../common/SubHeading';
import ErrorMsg from '../../common/ErrorMsg';
import SuccessMsg from '../../common/SuccessMsg';
import EnquiriesTableHeader from './EnquiriesTableHeader';
import EnquiriesList from './EnquiriesList';
import TableSection from '../../common/TableSection';

import EnquiriesContext from '../../contexts/EnquiriesContext';
import { REMOVE_ENQUIRY } from '../../contexts/EnquiriesContext';
import Button from '../../common/Button';

const EnquiryAdminPage = () => {
	const context = useContext(EnquiriesContext);
	const [state, dispatch, deleteEnquiries] = context;
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(state.enquiries.length > 0);
	}, [state.enquiries.length]);

	let getAllIds = state.enquiries.map(msg => {
		const { id } = msg;
		return id;
	});

	let stringifyAllIds = JSON.stringify(getAllIds);
	let id = JSON.parse(stringifyAllIds);

	const handleDeleteAllEnquiries = () => {
		for (let i = 0; i < id.length; i++) {
			dispatch({ type: REMOVE_ENQUIRY, payload: id[i] });
			deleteEnquiries(id[i]);
		}
	};
	return (
		<main>
			<section className="inbox__header-section">
				<SubHeading content="Enquiries" />
			</section>
			<section>
				{state.serverError && <ErrorMsg>{state.serverError}</ErrorMsg>}
				{state.successMsg && <SuccessMsg>Successfully deleted</SuccessMsg>}
			</section>
			{visible ? (
				<section>
					<Button
						type="button--red button--hover"
						handleClick={() => handleDeleteAllEnquiries()}
						label="Delete all enquiries"
					/>
				</section>
			) : null}
			<TableSection className="table-section">
				<table>
					<EnquiriesTableHeader />
					<EnquiriesList state={state} deleteEnquiries={deleteEnquiries} />
				</table>
			</TableSection>
		</main>
	);
};

export default EnquiryAdminPage;
