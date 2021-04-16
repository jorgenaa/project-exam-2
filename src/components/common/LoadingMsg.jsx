import PropTypes from "prop-types";

const LoadingMsg = ({ children }) => {
    return (
       <p className="form__message form__message--loading">{children}</p>
    );
}

LoadingMsg.proptTypes = {
	children: PropTypes.node.isRequired,
};

export default LoadingMsg;
