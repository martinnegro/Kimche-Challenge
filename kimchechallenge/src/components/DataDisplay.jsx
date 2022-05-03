import React, { useContext, useCallback, useEffect, useState } from 'react'
import { DataContext } from '../contexts/DataContext';
import { groupByConstants } from '../constants'

import debounce from 'lodash.debounce';

import NameInput from './NameInput'
import ButtonPanel from './ButtonPanel'
import ShowCountries from './ShowCountries'
import filterCountries from '../utils/filterCountries';

const DataDisplay = () => {
    const { loading, continentsKeys, languagesKeys, countries } = useContext(DataContext)
    
    const [ inputValue, setInputValue ] = useState('');
    const [ groupBy, setGroupBy ] = useState(groupByConstants.CONTINENT);
    const [ filteredCountries, setFilteredCountries ] = useState([]);
    
    const debouncedFilterCountries = useCallback(debounce(function (){
        setFilteredCountries(filterCountries(...arguments))
    },450),[]);
    
    useEffect(() => {
        if (!countries || !groupBy) return setFilteredCountries([]);
        let keys;
        if (groupBy === groupByConstants.CONTINENT) keys = continentsKeys;
        if (groupBy ===  groupByConstants.LANGUAGE) keys =  languagesKeys;
        
        debouncedFilterCountries(inputValue,countries,groupBy,keys)
    },[inputValue])
    
    const handleGroupBy = (e) => {
        e.preventDefault();
        if (e.target.name === groupBy) return;
        setGroupBy(e.target.name)
    }
    
    return (
        <>
            <NameInput value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
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