import { useEffect, useContext, useState } from 'react';

import EnquiriesContext from '../../contexts/EnquiriesContext';
import { TOGGLE_ALL } from "../../contexts/EnquiriesContext"

const EnquiriesTableHeader = () => {
    const [allSelected, setAllSelected] = useState(false);
    const context = useContext(EnquiriesContext);
    const [state, dispatch] = context;
   
    useEffect(() => {
        setAllSelected(state.allSelected )
    }, [state.allSelected])

    console.log(allSelected);

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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Check in</th>
                    <th>Check out</th>
                </tr>
            </thead>
    )
}

export default EnquiriesTableHeader;