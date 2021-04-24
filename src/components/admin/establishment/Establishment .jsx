import { useState } from 'react';

import Button from '../../common/Button';
//import AddEstablishmentBtn from './AddEstablishmentBtn';
import DeleteEstablishmentBtn from './DeleteEstablishmentBtn';
import SubHeading from '../../common/SubHeading';
import TableSection from '../../common/TableSection';
import EstablishTableHeader from './EstablishTableHeader';
import EstablishmentsList from './EstablishmentsList';
import EstablishmentForm from './EstablishmentForm';

const Establishment = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);

	return (
		<main>
			<section className="inbox__header-section">
				<SubHeading content="Establishments" />
				<div className="inbox__header-btn">
					<Button
						handleClick={handleShow}
						// label={!error ? "New establishment" : "Error" }
						type="button--blue button--hover"
						label="New establishment"
					/>
					<DeleteEstablishmentBtn />
				</div>
			</section>
			<section>
				<EstablishmentForm show={show} setShow={setShow} />
			</section>
			<TableSection className="table-section">
				<table>
					<EstablishTableHeader />
					<EstablishmentsList />
				</table>
			</TableSection>
		</main>
	);
};

export default Establishment;
