import { useState, useContext, useEffect } from 'react'; 

import { IoTrashBin } from 'react-icons/io5';
import Button from '../../common/Button';
import EnquiriesContext from '../../contexts/EnquiriesContext';

const DeleteEnquiryBtn = () => {
    const [visible, setVisible] = useState(false);
    const context = useContext(EnquiriesContext);
    const [ state, deleteEstablishment, error ] = context;
    

    useEffect(() => {
        setVisible(state.checkedIds.length > 0);

    }, [state.checkedIds.length]);
    
   
    const handleDeleteEstablishment = () => deleteEstablishment();

    return (
        
        <>
        {visible ? 
            <Button handleClick={handleDeleteEstablishment} label={!error ? <IoTrashBin /> : "Error" } type="button--red button--hover" />
        : null}
        </>
    )
}

export default DeleteEnquiryBtn;
