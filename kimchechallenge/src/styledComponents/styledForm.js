import styled from 'styled-components';

export const GroupToggleForm = styled.form`
    width: 100%;
    border: solid 2px var(--border-color);
    border-radius: 2px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
    flex-shrink: 0;

    overflow: hidden;    
`
export const Label = styled.label`
    text-align: center;
    flex-shrink: 0;
    width: 100%;
    padding: 0.5rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
`

export const GroupToggleButton = styled.button`
    flex-grow: 1;
    padding: 0.5rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    color: var(--text-color);

    border-top: 2px solid var(--border-color);
    border-bottom: none;
    border-left: ${({ first }) => first ? '0' : '1px solid var(--border-color)'};
    border-right: ${({ last }) => last ? '0' : '1px solid var(--border-color)'};

    background-color: ${({ selected }) => selected ? 'var(--border-color)' : 'transparent'};
    cursor:  ${({ selected }) => selected ? 'default' : 'pointer'};
    

    &:hover {
        text-shadow: ${({ selected }) => selected ? '' : '0px 0px 2px var(--text-color)'};
    }

    transition: all 400ms ease;
`

