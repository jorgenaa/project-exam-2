import { useContext, useEffect, useState  } from 'react'; 
import {PropTypes} from "prop-types";
import MessagesContext from '../../contexts/MessagesContext';
import { ADD_ID, REMOVE_ID } from "../../contexts/MessagesContext"
//import { saveMessages, getExistingMessages } from './inboxStorage';


const CheckedMsgBtn = ({id}) => {
    const [isChecked, setIsChecked] = useState(false)

    const context = useContext(MessagesContext);
    const [state, dispatch] = context;

    useEffect(() => {
        setIsChecked(state.checkedIds.includes(id))
        
    }, [id, state.checkedIds, isChecked, state.allChecked])

    const handleToggleCheckedInbox = (e) => {
        dispatch({type: isChecked ? REMOVE_ID : ADD_ID, payload: id})
       
    //    const currentCheckedInboxes = getExistingMessages();
      
    //     const checkedInboxExist = currentCheckedInboxes.find((message) => {
    //         return message === id;
    //     })
      
    //      if(checkedInboxExist === undefined){
    //          currentCheckedInboxes.push(e.target.value);
    //          saveMessages(currentCheckedInboxes);
    //      }else {
    //         const newMessages = currentCheckedInboxes.filter((message) => {
    //             return message !== id;
    //         })
    //         saveMessages(newMessages)
    //      }
       
    //     localStorage.setItem("message", JSON.stringify(e.target.value))
   }
    return (
        <input
            type="checkbox"
            checked={isChecked}
            value={id}
            onChange={handleToggleCheckedInbox}
     />
    )
}

CheckedMsgBtn.propTypes = {
    id: PropTypes.number.isRequired
}

export default CheckedMsgBtn;
