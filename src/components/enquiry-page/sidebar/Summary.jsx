import {PropTypes} from "prop-types";

const Summary = ({bookingInc}) => {
 
    return (
            <table className="bookDetails bookDetails--third">
                <thead>
                    <tr className="bookDetails__header-row">
                        <th className="bookDetails__hd-col">Your booking includes</th>
                        <th className="bookDetails__hd-col"></th>
                    </tr>
                </thead>
                {bookingInc ? <tbody>
                   {bookingInc.map(item => {
                        return (
                            <tr key={item.id}>
                                <td className="bookDetails__col">{item.name}</td>
                                <td className="bookDetails__col"></td>
                            </tr>
                        )
                    })}
                   
                </tbody>: ""}
            </table>
    )
}

Summary.propTypes = {
	bookingInc: PropTypes.object.isRequired
}

export default Summary;
