import { useContext } from 'react'; 

import Button from '../../common/Button';
import EstablishmentsContext from '../../contexts/EstablishmentsContext';

const AddEstablishmentBtn = () => {
   
    const context = useContext(EstablishmentsContext);
    const [ addEstablishment, error ] = context;
    
    const handleAddEstablishment = () => addEstablishment();

    return <Button 
                handleClick={handleAddEstablishment} 
                label={!error ? "New establishment" : "Error" } 
                type="button--blue button--hover" 
            />
}

export default AddEstablishmentBtn;
