import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
.accordion__button {
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    padding: 0.2rem;
    width: 100%;
    text-align: left;
    border: none;
}

.accordion__button:hover {
    background-color: ${({ theme }) => theme.borderColor};
    color: ${({ theme }) => theme.textColorHover};
}
.accordion__button[aria-expanded='true'],
.accordion__button[aria-selected='true'] {
    color: ${({ theme }) => theme.textColorHover};
    background-color: ${({ theme }) => theme.borderColor};
    
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
    position: relative;
    border: 1px solid ${({ theme }) => theme.borderColor};
    padding-left: 2.5rem;
    padding-block: 0.5rem;
    
}


@keyframes fadein {
    0% {
        bottom: 100%;
    }

    100% {
        bottom: 0%;
    }
}   
`