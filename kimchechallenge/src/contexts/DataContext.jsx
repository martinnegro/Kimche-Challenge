import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_COUNTRIES } from "../constants";


export const DataContext = createContext({});

const DataContextProvider = ({ children }) => {
    const { loading, _error, data } = useQuery(GET_COUNTRIES);
    const [ countries, setCountries ] = useState([])
    const [ continentsKeys, setContinentsKey ] = useState([]);
    const [ languagesKeys, setLanguagesKey ] = useState([]);
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
        setContinentsKey(() => {
            const aux = groupKeysMaker(data?.continents) 
            return aux
        })
        setLanguagesKey(() => {
            const aux = groupKeysMaker(data?.languages) 
            return aux
        })
    },[data])

    return (
        <DataContext.Provider
            value={{
                loading,
                countries,
                continentsKeys,
                languagesKeys
            }}
        >
            { children }
        </DataContext.Provider>
    )
}

export default DataContextProvider;