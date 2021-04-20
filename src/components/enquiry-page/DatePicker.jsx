import React, {useState} from 'react'; //useContext
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const DatePicker = ({dateRange, setDateRange, id}) => {
    
      const [focus, setFocus] = useState(null);
    
      const { startDate, endDate } = dateRange;
    
      const handleOnDateChange = (startDate, endDate) =>
            setDateRange(startDate, endDate);

    return (
          <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId={id} // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId={id} // PropTypes.string.isRequired,
                onDatesChange={handleOnDateChange} // PropTypes.func.isRequired,
                focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focus => setFocus(focus)} // PropTypes.func.isRequired,
            />
       
    )
}

export default DatePicker;