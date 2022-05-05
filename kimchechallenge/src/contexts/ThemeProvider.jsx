import React,{ useState, createContext } from "react";
import { ThemeProvider } from "styled-components";

const theming = {
    dark: {
        bgBody: '#202c33',
        bgMain: '#111b21',
        textColor: '#d1d7db',
        textInputColor: '#d1d7db',
        textColorSelectedButton: '#d1d7db',
        textColorAlternative: 'rgba(233,237,239,0.88)',
        buttonBgHover: 'rgba(134,150,160,0.15)',
        buttonTextHover: '#d1d7db',
        inputBgColor: '#2a3942',
        borderColor: 'rgba(134,150,160,0.15)',
    },
    light: {
        bgBody: '#fff',
        bgMain: '#fdfac7',
        textColor: '#282820',
        textInputColor: '#282820',
        textColorSelectedButton: '#fdfac7',
        textColorHover: '#fdfac7',
        textColorAlternative: 'rgba(233,237,239,0.88)',
        buttonBgHover: 'rgba(40, 40, 32, 0.552)',
        buttonTextHover: '#fdfac7',
        inputBgColor: '#fdfac7',
        borderColor: '#282820',
    }
}

export const ThemeContext = createContext(theming.light)

const ThemeContextProvider = ({ children }) => {
    const [ theme, setTheme ] = useState(theming.light);

    const handleSwitchTheme = (boolean) => {
        setTheme( boolean ? theming.dark : theming.light ); 
    }

    return (
        <ThemeProvider
            theme={theme}
        >
            <ThemeContext.Provider
                value={handleSwitchTheme}
            >
                { children }
            </ThemeContext.Provider>
        </ThemeProvider>
    )
};

export default ThemeContextProvider;