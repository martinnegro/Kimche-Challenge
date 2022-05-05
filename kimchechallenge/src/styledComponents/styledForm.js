import styled from 'styled-components';

export const GroupToggleForm = styled.form`
    width: 100%;
    border: solid 2px ${({ theme }) => theme.borderColor};
    border-radius: 2px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;    
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
    flex:  1 1 0;
    padding: 0.5rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    color: ${  ({ selected, theme }) => selected ? theme.textColorSelectedButton : theme.textColor};
    border: none;
    border-top: 2px solid ${({ theme }) => theme.borderColor};
      

    cursor: ${({ selected }) => selected ? 'default' : 'pointer'};
    background-color: ${({ selected }) => selected ? ({ theme }) => theme.borderColor : 'transparent'};
    background-position: 50 50;
    

    &:hover {
        background-color: ${({ selected, theme }) => !selected && theme.buttonBgHover};
        color:  ${({ selected, theme }) => !selected && theme.buttonTextHover}
    }

    transition: all 400ms ease;
`

