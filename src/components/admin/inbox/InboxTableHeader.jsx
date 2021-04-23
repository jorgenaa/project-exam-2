import { useEffect, useContext, useState } from 'react';

import MessagesContext from '../../contexts/MessagesContext';
import { TOGGLE_ALL } from "../../contexts/MessagesContext"

const InboxTableHeader = () => {
    const [, setAllSelected] = useState(false);
    const context = useContext(MessagesContext);
    const [state, dispatch] = context;
   
    useEffect(() => {
        setAllSelected(state.allChecked )
    }, [state.allChecked])


    const handleToggleAllChecked = () => {
        dispatch({type: TOGGLE_ALL, payload: !state.allChecked })
    }

    return (
            <thead >
               {state.users.length > 0 ?
                <tr>
                    <th>
                        <input 
                            type="checkbox" 
                            onClick={handleToggleAllChecked}
                            />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
                : null}
            </thead>
    )
}

export default InboxTableHeader;
