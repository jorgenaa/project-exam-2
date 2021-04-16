import React, { createContext } from "react";
import { useLocalStorage } from '../../hooks/useLocalStorage';

const DatesContext = createContext();

export const DatesProvider = (props) => {
    let initialState = { startDate: null, endDate: null}
	const [dateRange, setDateRange] = useLocalStorage("dates" ,initialState);
	return <DatesContext.Provider value={[dateRange, setDateRange]}>{props.children}</DatesContext.Provider>;
};

export default DatesContext;