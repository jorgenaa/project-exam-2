import { useContext } from 'react';
import EnquiriesContext from '../../contexts/EnquiriesContext';

import CheckedEnquiryBtn from './CheckedEnquiryBtn';

const EnquiriesList = () => {

    const context = useContext(EnquiriesContext);
    const [ state ] = context;

    if (state.enquiries.length === 0) {
            return <tbody><tr><td>No enquiries</td></tr></tbody>;
        }

    return (
        <>
            <tbody>
                {state.enquiries.map(enquiry => {
                const {id, establishment, firstName, lastName, email, fromDate, toDate} = enquiry;
                return (
                        <tr key={id}>
                            <td>
                                <CheckedEnquiryBtn key={id} id={id} />
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
