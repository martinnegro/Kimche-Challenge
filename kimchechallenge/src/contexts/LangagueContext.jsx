import React, { createContext, useState } from 'react';

const langs = {
    english: {
        title: 'Country Search',
        inputPlaceholder: "Start writing a country name",
        toggleGroupingForm: {
            label: 'Group by',
            continents: 'CONTINENTS',
            languages: 'LANGUAGES'
        }
    },
    spanish: {
        title: 'Buscador Países',
        inputPlaceholder: "Escribe nombre de países (en inglés)",
        toggleGroupingForm: {
            label: 'Agrupar por',
            continents: 'CONTINENTES',
            languages: 'IDIOMAS'
        } 
    }
}

export const LanguageContext = createContext(null);

const LangagueContextProvider = ({ children }) => {
    const [ selectedLang, setSelectedLang ] = useState(langs.english)
    const handleSwitchLang = (boolean) => setSelectedLang(boolean ? langs.spanish : langs.english)

    return (
        <LanguageContext.Provider
            value={{
                selectedLang,
                handleSwitchLang
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export default LangagueContextProvider