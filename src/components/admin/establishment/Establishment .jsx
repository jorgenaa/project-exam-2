import { useContext } from 'react'; 
import { useHistory } from 'react-router-dom';

import Button from '../../common/Button';
import SubHeading from '../../common/SubHeading';
import TableSection from '../../common/TableSection';
import EstablishTableHeader from './EstablishTableHeader';
import EstablishmentsList from './EstablishmentsList';

import EstablishmentsContext from '../../contexts/EstablishmentsContext';

const Establishment = () => {
	const context = useContext(EstablishmentsContext);
	const [state, , ] = context;
	const history = useHistory();
	const handleShow = () => history.push("/establishmentForm");

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
