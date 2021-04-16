import PropTypes from "prop-types";

const ErrorMessage = ({ children }) => {
    return (
       <p className="form__message form__message--error">{children}</p>
    );
}

ErrorMessage.proptTypes = {
	children: PropTypes.node.isRequired,
};

export default ErrorMessage;
