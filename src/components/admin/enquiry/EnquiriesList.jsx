import { useContext } from 'react';
import EnquiriesContext from '../../contexts/EnquiriesContext';

import CheckedEnquiryBtn from './CheckedEnquiryBtn';

const EnquiriesList = ({enquiries}) => {
    //const [selected, setSelected] = useState(false);
    const context = useContext(EnquiriesContext);
    const [ state ] = context;

    if (state.enquiries.length === 0) {
            return <div>No users</div>;
        }

    return (
        <>
            {state.enquiries.map(enquiry => {
                
                const {hotel_id, establishment, clientName, email, from_date, to_date} = enquiry.acf;
              
                return (
                    <tbody>
                        <tr key={hotel_id}>
                            <td>
                                <CheckedEnquiryBtn />
                            </td>
                            <td>{establishment}</td>
                            <td>{clientName}</td>
                            <td>{email}</td>
                            <td>{from_date}</td>
                            <td>{to_date}</td>
                        </tr>
                    </tbody>
                )
            })}
        </>
    )
}

export default EnquiriesList;
