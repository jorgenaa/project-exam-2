//import React, { useContext } from 'react';
//import DatesContext from '../DatesContext';


const BookingDetails = (props) => {
   // const [dateRange ] = useContext(DatesContext);
    //const { startDate, endDate } = dateRange;
  

    return (
        <>
            <table className="bookDetails bookDetails--first">
                <thead>
                    <tr className="bookDetails__header-row">
                        <th>Your booking details</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="bookDetails__body">
                    <tr className="bookDetails__body-row">
                        <td className="bookDetails__col">Check inn</td>
                        <td className="bookDetails__col">Check out</td>
                    </tr>
                    <tr>
                        {/* <th className="bookDetails__col">{startDate}</th>
                        <th className="bookDetails__col">{endDate}</th> */}
                    </tr>
                    <tr className="bookDetails__body-row">
                        <td className="bookDetails__col">Total length of stay</td>
                        <td></td>
                    </tr>
                    <tr className="bookDetails__body-row">
                        <th></th>
                        <td></td>
                    </tr>
                    <tr className="bookDetails__body-row">
                        <th>You selected</th>
                        <th></th>
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
