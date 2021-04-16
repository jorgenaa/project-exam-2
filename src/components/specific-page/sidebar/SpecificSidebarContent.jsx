import { Link } from "react-router-dom";
//import {PropTypes} from "prop-types";

import Button from '../../common/Button';

const SpecificSidebarContent = ({id, icons}) => {
 
  let allIcons;
  let revisedIconList;
  let serviceIcon;

  if(icons !== undefined) {
    console.log("icons are not undefined");
    console.log(icons)
    allIcons = icons.split(" ");
    revisedIconList = allIcons.slice(0, 8);
    //remove the service icon from the list
    revisedIconList.splice(2, 1);
    // add the service icon to a list element
    serviceIcon = allIcons.slice(2, 3);
} else {
   console.log("icons are undefined")
}
    
  
   
    return (
        <>
            <Link to={"/enquiry/" + id}>
                <Button label="Reserve" type="button button--blue button--hover" />
            </Link>
            <div >
                 <h4 className="specific__sidebar-title">Facilities</h4>
                
                  <ul className="specific__sidebar__list">
                    {revisedIconList.map((icon, index) => {
                            return <li key={index} className="specific__sidebar-list-item"><span className={`fa ${icon}`}></span></li> 
                    })}
                     <li><span className={`fa ${serviceIcon}`} /> 
                        <ul>
                            <li className="specific__list-services-item">- Laundry</li>
                            <li className="specific__list-services-item">- Wake-up service</li>
                            <li className="specific__list-services-item">- 24-hour front desk</li>    
                        </ul> 
                    </li>
                </ul> 
            </div>
           
        </>
    )
}
// SpecificSidebarContent.propTypes = {
//     id: PropTypes.number.isRequired,
// }

export default SpecificSidebarContent;
