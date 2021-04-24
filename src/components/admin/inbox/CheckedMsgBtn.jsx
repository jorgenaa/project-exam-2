import { useContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import MessagesContext from '../../contexts/MessagesContext';
import { ADD_ID, REMOVE_ID } from '../../contexts/MessagesContext';

const CheckedMsgBtn = ({ id }) => {
	const [isChecked, setIsChecked] = useState(false);

	const context = useContext(MessagesContext);
	const [state, dispatch] = context;

	useEffect(() => {
		setIsChecked(state.checkedIds.includes(id));
	}, [id, state.checkedIds, isChecked, state.allChecked]);

	const handleToggleCheckedInbox = e => {
		dispatch({ type: isChecked ? REMOVE_ID : ADD_ID, payload: id });
	};

	return (
		<input
			type="checkbox"
			checked={isChecked}
			value={id}
			onChange={handleToggleCheckedInbox}
		/>
	);
};

CheckedMsgBtn.propTypes = {
	id: PropTypes.number.isRequired,
};

export default CheckedMsgBtn;
