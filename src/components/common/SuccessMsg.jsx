import PropTypes from 'prop-types';

const SuccessMsg = ({ children }) => {
	return <p className="form__message form__message--success">{children}</p>;
};

SuccessMsg.proptTypes = {
	children: PropTypes.node.isRequired,
};

export default SuccessMsg;
