import { useContext, useEffect, useState } from 'react';

import Button from '../../common/Button';
//import AddEstablishmentBtn from './AddEstablishmentBtn';
import DeleteEstablishmentBtn from './DeleteEstablishmentBtn';
import SubHeading from '../../common/SubHeading';
import TableSection from '../../common/TableSection';
import EstablishTableHeader from './EstablishTableHeader';
import EstablishmentsList from './EstablishmentsList';
import EstablishmentForm from './EstablishmentForm';
import EstablishmentsContext from '../../contexts/EstablishmentsContext';
import { REMOVE_ESTABLISHMENT } from '../../contexts/EstablishmentsContext';

const Establishment = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);

	const context = useContext(EstablishmentsContext);
	const [state, dispatch, deleteEstablishment] = context;
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(state.establishments.length > 0);
	}, [state.establishments.length]);

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
					{visible ? <DeleteEstablishmentBtn /> : null}
				</div>
			</section>
			<section>
				<EstablishmentForm show={show} setShow={setShow} />
			</section>
			<TableSection className="table-section">
				<table>
					<EstablishTableHeader />
					<EstablishmentsList
						REMOVE_ESTABLISHMENT={REMOVE_ESTABLISHMENT}
						state={state}
						dispatch={dispatch}
						deleteEstablishment={deleteEstablishment}
					/>
				</table>
			</TableSection>
		</main>
	);
};

export default Establishment;
