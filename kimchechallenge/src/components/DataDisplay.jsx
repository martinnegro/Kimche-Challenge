import React, { useCallback, useEffect, useState } from 'react'
import { groupByConstants } from '../constants'

import debounce from 'lodash.debounce';

import NameInput from './NameInput'
import ButtonPanel from './ButtonPanel'
import ShowCountries from './ShowCountries'
import filterCountries from '../utils/filterCountries';

const DataDisplay = ({ countries, loading, continentsKeys, languagesKeys }) => {
    const [ value, setValue ] = useState('');
    const [ groupBy, setGroupBy ] = useState(groupByConstants.CONTINENT);
    const [ filteredCountries, setFilteredCountries ] = useState([]);
    const debouncedFilterCountries = useCallback(
        debounce((string,array,setArray,keys,groupBy) => filterCountries(string,array,setArray,keys,groupBy)
    ,500),[]);
    
    useEffect(() => {
        if (!countries) return setFilteredCountries([]);
        let keys;
        if (groupBy === groupByConstants.CONTINENT) keys = JSON.parse(JSON.stringify(continentsKeys));
        if (groupBy === groupByConstants.LANGUAGE) keys =  JSON.parse(JSON.stringify(languagesKeys));
        debouncedFilterCountries(value,countries,setFilteredCountries,keys,groupBy)
    },[value,countries,groupBy])
    
    const handleGroupBy = (e) => {
        e.preventDefault();
        if (e.target.name === groupBy) return;
        setGroupBy(e.target.name)
    }
    
    return (
        <>
            <NameInput value={value} onChange={(e) => setValue(e.target.value)}/>
            <ButtonPanel onClick={handleGroupBy} groupBy={groupBy}/>
            {
                loading ?
                <h1>Wait...</h1>
                : 
                <ShowCountries filteredCountries={filteredCountries} />
            }
        </>
    )
}

export default DataDisplay