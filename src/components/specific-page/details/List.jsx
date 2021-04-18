import {useEffect, useState } from 'react';
const List = ({facilityIcons, id}) => {
    const [allIcons, setAllIcons] = useState([]);
    const [serviceIcon, setServiceIcon] = useState([]);
    const [secondIconsList, setSecondIconsList] = useState([]);
    console.log(facilityIcons)

   useEffect(() => {
        const icons = facilityIcons.slice(0, 4);
        setAllIcons(icons);
      if(icons) {
            //remove the service icon from the list
            icons.splice(2, 1);
            // add the service icon to a list element
            const serviceIcon = facilityIcons.slice(2, 3);
            setServiceIcon(serviceIcon);
            const secondIconsList = facilityIcons.slice(4, 8);
            setSecondIconsList(secondIconsList)
      }
      	// eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   console.log(secondIconsList)
    return (
        <>
            <ul className="specific__list-sm" key={id}>
                <ul className="specific__list-sm-item">
                    {allIcons.map(icon => {
                        return <li className="specific__details-list-item"><span className={`fa ${icon}`}></span></li> 
                    })}
                    <li><span className={`fa ${serviceIcon}`} />
                        <ul>
                            <li className="specific__list-services-item">- Laundry</li>
                            <li className="specific__list-services-item">- Wake-up service</li>
                            <li className="specific__list-services-item">- 24-hour front desk</li>    
                        </ul> 
                    </li>
                </ul>
                <ul className="specific__list-sm-item">
                   {secondIconsList.map(icon => {
                        return <li className="specific__details-list-item"><span className={`fa ${icon}`}></span></li> 
                    })}
                </ul>
            </ul>
        </>
    )
}

export default List;