import { useContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import EnquiriesContext from '../../contexts/EnquiriesContext';
import { ADD_ID, REMOVE_ID } from '../../contexts/EnquiriesContext';

const CheckedEnquiryBtn = ({ id }) => {
	const [isChecked, setIsChecked] = useState(false);

	const context = useContext(EnquiriesContext);
	const [state, dispatch] = context;

	useEffect(() => {
		setIsChecked(state.checkedIds.includes(id));
	}, [id, state.checkedIds, isChecked, state.allChecked]);

	const handleToggleCheckedEnquiry = e => {
		dispatch({ type: isChecked ? REMOVE_ID : ADD_ID, payload: id });
	};
	return (
		<input
			type="checkbox"
			checked={isChecked}
			value={id}
			onChange={handleToggleCheckedEnquiry}
		/>
	);
};

CheckedEnquiryBtn.propTypes = {
	id: PropTypes.number.isRequired,
};

export default CheckedEnquiryBtn;
