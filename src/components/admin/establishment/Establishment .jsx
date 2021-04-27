import { useContext, useState } from 'react';

import Button from '../../common/Button';
import SubHeading from '../../common/SubHeading';
import TableSection from '../../common/TableSection';
import EstablishTableHeader from './EstablishTableHeader';
import EstablishmentsList from './EstablishmentsList';
import EstablishmentForm from './EstablishmentForm';
import EstablishmentsContext from '../../contexts/EstablishmentsContext';

const Establishment = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);

	const context = useContext(EstablishmentsContext);
	const [state, , ] = context;

	return (
		<main>
			<section className="inbox__header-section">
				<SubHeading content="Establishments" />
				<div className="inbox__header-btn">
					<Button
						handleClick={handleShow}
						label={!state.serverError ? "New establishment" : "Error" }
						type="button--blue button--hover"
					/>
				</div>
			</section>
			<section>
				<EstablishmentForm show={show} setShow={setShow} />
			</section>
			<TableSection className="table-section">
				<table>
					<EstablishTableHeader />
					<EstablishmentsList state={state} />
				</table>
			</TableSection>
		</main>
	);
};

export default Establishment;
