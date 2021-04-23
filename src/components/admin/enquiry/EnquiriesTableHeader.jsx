import { useEffect, useContext, useState } from 'react';

import EnquiriesContext from '../../contexts/EnquiriesContext';
import { TOGGLE_ALL } from "../../contexts/EnquiriesContext"

const EnquiriesTableHeader = () => {
    const [, setAllSelected] = useState(false);
    const context = useContext(EnquiriesContext);
    const [state, dispatch] = context;
   
    useEffect(() => {
        setAllSelected(state.allChecked )
    }, [state.allChecked])


    const handleToggleAllChecked = () => {
        dispatch({type: TOGGLE_ALL, payload: !state.allChecked })
    }

    return (
            <thead>
                <tr>
                    <th>
                        <input   
                            type="checkbox" 
                            onClick={handleToggleAllChecked}   
                        />
                    </th>
                    <th>Establishment</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Check in</th>
                    <th>Check out</th>
                </tr>
            </thead>
    )
}

export default EnquiriesTableHeader;