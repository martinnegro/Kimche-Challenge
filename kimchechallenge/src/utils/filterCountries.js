const filterCountries = (string,array,setArray,keys,groupBy) => {
    if (string < 1) return setArray([]);
    const filteredArray = array
    .reduce((acc,country) => {
        const startsWith = country.name.toLowerCase().startsWith(string.toLowerCase())
        if (!startsWith) return acc;
        const aux = acc;
        if (Array.isArray(country[groupBy])) {
            aux.forEach((k) => country[groupBy].some((l) => l.code === k.code) && k.countries.push(country)  )
        } else {
            aux.forEach((c) => c.code === country.continent.code && c.countries.push(country) )
        }
        return aux
    },keys)

    setArray(filteredArray);
}
export default filterCountries;