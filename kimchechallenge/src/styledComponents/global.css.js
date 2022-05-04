import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        --background-body: #202c33;
        --background-main: #111b21;
        --text-color: #d1d7db;
        --text-color-two: rgba(233,237,239,0.88);
        --input-bg-color: #2a3942;
        --border-color: rgba(134,150,160,0.15);
    }
    body {
        margin: 0;
        padding: 0;
        overflow-y: scroll;
        
        background-color: var(--background-body);
        color: var(--text-color);
        
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
        background-color: var(--background-main);
        color: 
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
        background-color: rgba(134,150,160,0.15);
    }
    .accordion__button[aria-expanded='true'],
    .accordion__button[aria-selected='true'] {
        background-color: rgba(134,150,160,0.15);
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
        border: 1px solid rgba(134,150,160,0.15);
        padding-left: 2.5rem;
        padding-block: 0.5rem;
        animation: fadein 500s ease-in;
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