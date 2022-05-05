import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        
    }
    body {
        margin: 0;
        padding: 0;
        overflow-y: scroll;
        
        background-color: ${({ theme }) => theme.bgBody};
        color: ${({ theme }) => theme.textColor};
        
    }
    #root {
        min-height: 100vh;
        width: 850px;
        
        margin-inline: auto;
        padding-inline: 25px;
        padding-block: 1rem;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;        
        background-color: ${({ theme }) => theme.bgMain};
        color: 
    }

    ul {
        list-style:none;
        padding: 0
    }
`