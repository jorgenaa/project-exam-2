import { useContext } from 'react';
//Components
import Button from '../../common/Button';
import EstablishmentsContext from '../../contexts/EstablishmentsContext';
import { REMOVE_ESTABLISHMENT } from '../../contexts/EstablishmentsContext';

const DeleteEstablishmentBtn = () => {
	const context = useContext(EstablishmentsContext);
	const [state, deleteEstablishment, dispatch] = context;

	let getAllIds = state.establishments.map(establishment => {
		const { id } = establishment;
		return id;
	});

	let stringifyAllIds = JSON.stringify(getAllIds);
	let parseAllIds = JSON.parse(stringifyAllIds);
	let id = parseInt(parseAllIds)

	const handleDeleteAllEstablishments = () => {
		for (let i = 0; i < id.length; i++) {
			dispatch({ type: REMOVE_ESTABLISHMENT, payload: id[i] });
			deleteEstablishment(id[i]);
		}
	};


	return (
			<Button
				handleClick={() => handleDeleteAllEstablishments()}
				label="Delete All Establishments"
				// label={!error ? "DeleteAllEstablishments" && <IoTrashBin /> : 'Error'}
				type="button--red button--hover"
			/>
	);
};

export default DeleteEstablishmentBtn;
