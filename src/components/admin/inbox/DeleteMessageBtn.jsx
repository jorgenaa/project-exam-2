import { useState, useContext, useEffect } from 'react'; 

import { IoTrashBin } from 'react-icons/io5';
import Button from '../../common/Button';
import MessageContext from '../../contexts/MessagesContext';

const DeleteMessageBtn = () => {
    const [visible, setVisible] = useState(false);
    const context = useContext(MessageContext);
    const [ state, deleteUsers, error ] = context;
    
    useEffect(() => {
        setVisible(state.checkedIds.length > 0);
       
    }, [state.checkedIds.length]);
    
    const handleDeleteUsers = () => deleteUsers();

    return (
        <>
        {visible ? 
            <Button handleClick={handleDeleteUsers} label={!error ? <IoTrashBin /> : "Error" } type="button--red button--hover" />
        : null}
        </>
    )
}

export default DeleteMessageBtn;
