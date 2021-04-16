import React, {useState} from 'react'; //useContext
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
//import DatesContext from './DatesContext';


const DatePicker = ({dateRange, setDateRange}) => {

    //const [dateRange, setDateRange ] = useContext(DatesContext);
   
    
      const [focus, setFocus] = useState(null);
    
      const { startDate, endDate } = dateRange;
    
      const handleOnDateChange = (startDate, endDate) =>
        setDateRange(startDate, endDate);

    return (
          <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={handleOnDateChange} // PropTypes.func.isRequired,
                focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focus => setFocus(focus)} // PropTypes.func.isRequired,
            />
       
    )
}

export default DatePicker;