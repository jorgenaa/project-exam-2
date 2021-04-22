import { useContext } from 'react';
import EnquiriesContext from '../../contexts/EnquiriesContext';

import CheckedEnquiryBtn from './CheckedEnquiryBtn';

const EnquiriesList = ({enquiries}) => {

    const context = useContext(EnquiriesContext);
    const [ state ] = context;

    if (state.enquiries.length === 0) {
            return <div>No users</div>;
        }

    return (
        <>
            <tbody>
                {state.enquiries.map(enquiry => {
                const {hotel_id, establishment, firstName, lastName, email, fromDate, toDate} = enquiry;
                return (
                        <tr key={hotel_id}>
                            <td>
                                <CheckedEnquiryBtn />
                            </td>
                            <td>{establishment}</td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{email}</td>
                            <td>{fromDate}</td>
                            <td>{toDate}</td>
                        </tr>
                        )
                    })}
            </tbody>  
        </>
    )
}

export default EnquiriesList;
