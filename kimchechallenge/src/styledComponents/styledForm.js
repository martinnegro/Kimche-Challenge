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

    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
`

export const GroupToggleButton = styled.button`
    flex-grow: 1;
    padding: 0.5rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;

    border-top: 2px solid var(--border-color);
    border-bottom: none;
    border-left: ${({ first }) => first ? '0' : '1px solid var(--border-color)'};
    border-right: ${({ last }) => last ? '0' : '1px solid var(--border-color)'};

    background-color: ${({ selected }) => selected ? 'var(--border-color)' : 'transparent'};
    color: ${({ selected }) => selected ? 'var(--text-color)' : 'var(--border-color)'};
    cursor:  ${({ selected }) => selected ? 'default' : 'pointer'};
    

    &:hover {
        text-shadow: 0px 0px 1px var(--text-color);
    }

    transition: all 400ms ease;
`

