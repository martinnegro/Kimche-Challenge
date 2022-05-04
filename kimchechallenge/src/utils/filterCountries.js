/*
    Arguments: {
        inputValue: string from input for filter countries by name,
        countriesArray: array with all countries from DataContext,
        keys: array with groups elements. it cames in JSON string format to avoid copies by reference.
                {
                    code: unique
                    name: string
                    countries: empty array for matching countries
                }
        groupBy: string with grouping name,
    }
    This function returns an array with injected matching countries 
*/
const filterCountries = (inputValue,countriesArray,groupBy,keys) => {
    if (inputValue < 1) return [];
    
    const parsedKeys = JSON.parse(keys);
    
    const finalArray = countriesArray
    .reduce((acc,country) => {
        const startsWith = country.name.toLowerCase().startsWith(inputValue.toLowerCase())
        if (!startsWith) return acc;
        /*
            groupBy arrives as `continent` or `languages` for process the desire group style
            country.continent is an object with name and code
            country.languages is an array of code languages strings 
            so
            if is array will handle each country language and add the country in matching groups.
            if not
        */
        if (Array.isArray(country[groupBy])) {
            acc.forEach((key) => country[groupBy].some((l) => l.code === key.code) && key.countries.push(country));
        } else {
            acc.forEach((key) => key.code === country.continent.code && key.countries.push(country) )
        }
        return acc
    },parsedKeys)
    return finalArray;
}
export default filterCountries;