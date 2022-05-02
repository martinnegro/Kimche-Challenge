import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '../constants';
import DataDisplay from './DataDisplay';

const Data = () => {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
    const [ continentsKeys, setContinentsKey ] = useState([]);
    const [ languagesKeys, setLanguagesKey ] = useState([]);

    useEffect(() => {
        if (!data) return;
        setContinentsKey(() => {
            const aux = data?.continents.map((continent) => { return { ...continent, countries: [] } })
            return aux
        })
        setLanguagesKey(() => {
            const aux = data?.languages.map((language) => { return { ...language, countries: [] } })
            return aux
        })
    },[data])
    
    return (
        <DataDisplay countries={data?.countries} loading={loading} continentsKeys={continentsKeys} languagesKeys={languagesKeys}/>
    )
}

export default Data