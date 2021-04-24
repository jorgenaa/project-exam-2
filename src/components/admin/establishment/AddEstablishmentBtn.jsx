//import { useContext } from 'react';

import Button from '../../common/Button';
//import EstablishmentsContext from '../../contexts/EstablishmentsContext';

const AddEstablishmentBtn = ({ handleShow }) => {
	// const context = useContext(EstablishmentsContext);
	// const [ addEstablishment, error ] = context; //

	// const handleAddEstablishment = () => addEstablishment();

	return (
		<Button
			handleClick={handleShow}
			// label={!error ? "New establishment" : "Error" }
			type="button--blue button--hover"
			label="New establishment"
		/>
	);
};

export default AddEstablishmentBtn;
