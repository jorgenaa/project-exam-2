import { useEffect, useContext, useState } from 'react';

import EstablishmentsContext from '../../contexts/EstablishmentsContext';
import { TOGGLE_ALL } from "../../contexts/EstablishmentsContext"

const EstablishTableHeader = () => {
    const [, setAllSelected] = useState(false);
    const context = useContext(EstablishmentsContext);
    const [state, dispatch] = context;
   
    useEffect(() => {
        setAllSelected(state.allSelected )
    }, [state.allSelected])

    
    const handleToggleAllChecked = () => {
        dispatch({type: TOGGLE_ALL, payload: !state.allChecked })
    }
   
    return (
            <thead>
             {state.establishments.length > 0 ?
                <tr >
                    <th>
                        <input 
                            type="checkbox" 
                            onClick={handleToggleAllChecked}
                            />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Max guests</th>
                    <th>Self catering</th>
                    <th>Description</th>
                </tr>
                : null}
            </thead>
     
    )
}

export default EstablishTableHeader;