import { useContext } from 'react'; 
import CheckedMsgBtn from './CheckedMsgBtn';
import MessagesContext from '../../contexts/MessagesContext';

const MessageList = () => {
  const context = useContext(MessagesContext);
  const [ state ] = context;

  if (state.users.length === 0) {
		return <div>No users</div>;
	}

 
console.log(state.users)
    return (
            <tbody >
                {state.users.map((user) => {
                  const {clientName, email, message, id} = user; 

                  return (
                      <tr key={id} >
                        <td>
                              <CheckedMsgBtn
                                    key={id}
                                    id={id}
                                    />  
                        </td>
                        <td>{clientName}</td>
                          <td>{email}</td>
                        <td>{message}</td>
                    </tr> 
                  )
                  })} 
              </tbody>
            )
        }

export default MessageList;