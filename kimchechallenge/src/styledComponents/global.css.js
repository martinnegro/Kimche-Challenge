import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        
        overflow: scroll
    }
    #root {
        height: 100%;
        width: 800px;
        margin-inline: auto;
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    ul {
        list-style:none;
        padding: 0
    }

    .accordion__button {
        
        color: #000;
        cursor: pointer;
        padding: 0.2rem;
        width: 100%;
        text-align: left;
        border: none;
    }

    .accordion__button:hover {
        background-color: #ddd;
    }
    
    .accordion__button:before {
        display: inline-block;
        content: '';
        height: 0.5rem;
        width: 0.5rem;
        margin: 0 12px 0 12px;
        border-bottom: 2px solid currentColor;
        border-right: 2px solid currentColor;
        transform: rotate(-45deg);
    }
    
    .accordion__button[aria-expanded='true']::before,
    .accordion__button[aria-selected='true']::before {
        transform: rotate(45deg);
    }

    .accordion__panel {
        padding-left: 2.5rem;
        animation: fadein 500s ease-in;
        background-color: #fcfcfc
    }
    @keyframes fadein {
        0% {
            height: 0%;
        }
    
        100% {
            height: 100%;
        }
    }
`