
const List = ({facilityIcons, id}) => {
    
    const icons = facilityIcons.slice(0, 4);
    //remove the service icon from the list
    icons.splice(2, 1);
    // add the service icon to a list element
    const serviceIcon = facilityIcons.slice(2, 3);
    const secondIconsList = facilityIcons.slice(4, 8);

    return (
        <>
            <ul className="specific__list-sm" key={id}>
                <ul className="specific__list-sm-item">
                    {icons.map(icon => {
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