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
        height: content;
        width: 850px;
        
        margin-inline: auto;
        padding-inline: 25px;
        padding-block: 1rem;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
        gap: 1rem;        
        
        background-color: ${({ theme }) => theme.bgMain};   
    }

    ul {
        list-style:none;
        padding: 0
    }
`