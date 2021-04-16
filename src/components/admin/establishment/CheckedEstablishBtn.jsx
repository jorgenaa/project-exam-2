import { useContext, useEffect, useState  } from 'react'; 
import {PropTypes} from "prop-types";
import EstablishmentsContext from '../../contexts/EstablishmentsContext';
import { ADD_ID, REMOVE_ID } from "../../contexts/EstablishmentsContext"

const CheckedEstablishBtn = ({id}) => {
    const [isChecked, setIsChecked] = useState(false)

    const context = useContext(EstablishmentsContext);
    const [state, dispatch] = context;

    useEffect(() => {
        setIsChecked(state.checkedIds.includes(id))
        
    }, [id, state.checkedIds, isChecked, state.allChecked])

    const handleToggleCheckedEstablishment = (e) => {
        dispatch({type: isChecked ? REMOVE_ID : ADD_ID, payload: id})
    }
    return  <input
                type="checkbox"
                checked={isChecked}
                value={id}
                onChange={handleToggleCheckedEstablishment}
            />
    
}

CheckedEstablishBtn.propTypes = {
    id: PropTypes.number.isRequired
}

export default CheckedEstablishBtn;