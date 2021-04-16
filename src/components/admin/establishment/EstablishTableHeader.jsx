import { useEffect, useContext, useState } from 'react';

import EstablishmentsContext from '../../contexts/EstablishmentsContext';
import { TOGGLE_ALL } from "../../contexts/EstablishmentsContext"

const EstablishTableHeader = () => {
    const [allSelected, setAllSelected] = useState(false);
    const context = useContext(EstablishmentsContext);
    const [state, dispatch] = context;
   
    useEffect(() => {
        setAllSelected(state.allSelected )
    }, [state.allSelected])

    console.log(allSelected);

    const handleToggleAllChecked = () => {
        dispatch({type: TOGGLE_ALL, payload: !state.allChecked })
    }
    //const ids = establishments.map(id => id.acf.id);
    //key={ids}
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