import { useState, useEffect } from 'react';

const Summary = ({bookingInc}) => {
const [included, setIncluded] = useState([]);

useEffect(() => {
    if(bookingInc) {
        const bookingIncluded = bookingInc.map(item => {
                return (
                    <tr>
                        <td className="bookDetails__col">{item.name}</td>
                        <td className="bookDetails__col"></td>
                    </tr>
                )
            })
            setIncluded(bookingIncluded);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
   

    return (
        <>
            <table className="bookDetails bookDetails--third">
                <thead>
                    <tr className="bookDetails__header-row">
                        <th className="bookDetails__hd-col">Your booking includes</th>
                        <th className="bookDetails__hd-col"></th>
                    </tr>
                </thead>
                <tbody>
                    {included} 
                </tbody>
            </table>
        </>
    )
}

export default Summary;
