import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_COUNTRIES, groupByConstants } from "../constants";


export const DataContext = createContext({});
/*
    This component fetches data
    and destructures it to available countries 
    and available groups
*/

const DataContextProvider = ({ children }) => {
    const { loading, _error, data } = useQuery(GET_COUNTRIES);
    const [ countries, setCountries ] = useState(null)
    const [ keys, setKeys ] = useState(null)
    useEffect(() => {
        if (!data) return;
        setCountries(data.countries)
        /* 
            - Can't do request taking advantage of data base relation yet
            - Response shape can be found in constants ../constants.js/{ GET_COUNTRIES }
            - Make object with keys for grouping using all existing elements in group
            - For each element creates an element with code and name 
            and inject a new countries key to store matching countries
            - Store object in JSON string for safe copies.
        */
        let groupKeysMaker = (group) => JSON.stringify(group.map((element) => { return { ...element, countries: [] } }))
        setKeys({
            [groupByConstants.CONTINENT]: groupKeysMaker(data?.continents),
            [groupByConstants.LANGUAGE]: groupKeysMaker(data?.languages)
        })
    },[data])

    return (
        <DataContext.Provider
            value={{
                loading,
                countries,
                keys
            }}
        >
            { children }
        </DataContext.Provider>
    )
}

export default DataContextProvider;