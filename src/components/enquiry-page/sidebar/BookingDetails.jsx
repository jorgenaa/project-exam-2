import moment from 'moment';

const BookingDetails = ({fromDate, toDate, roomType}) => {
  
    const startDate = fromDate;
    const endDate = toDate;

    const start = moment(startDate, "DD/MM/YYYY");
    const end = moment(endDate, "DD/MM/YYYY");
    const diffDays = moment.duration(end.diff(start)).asDays();

    return (
        <>
            <table className="bookDetails bookDetails--first">
                <thead>
                    <tr>
                        <th className="bookDetails__hd-col">Your booking details</th>
                        <th className="bookDetails__hd-col"></th>
                    </tr>
                </thead>
                <tbody className="bookDetails__body">
                    <tr className="bookDetails__body-row">
                        <td>Check inn</td>
                        <td>Check out</td>
                    </tr>
                    <tr>
                        <th>{startDate}</th>
                        <th>{endDate}</th> 
                    </tr>
                    <tr className="bookDetails__body-row">
                        <td>Total length of stay</td>
                        {diffDays ?<td>{diffDays} nights</td> : ""}
                    </tr>
                    <tr className="bookDetails__body-row">
                        <th></th>
                        <td></td>
                    </tr>
                    <tr className="bookDetails__body-row">
                        <th>You selected</th>
                        <th>{roomType}</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                   
                </tbody>
            </table> 
        </>
    )
}

export default BookingDetails;
