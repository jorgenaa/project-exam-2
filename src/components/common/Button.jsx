
const Button = (props) => {
    const btnClass = `button ${props.type}`
    return (
        <button className={btnClass} onClick={props.handleClick}>
            {props.label}
        </button>
    )
}

export default Button;
