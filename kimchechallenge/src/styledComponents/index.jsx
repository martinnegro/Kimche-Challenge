import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    align-self: start;
    margin-bottom: 0;
    font-size: 3rem;
`
export const Input = styled.input`
    width: 100%;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    flex-grow: 0;

    border: solid 2px ${({theme}) => theme.borderColor };
    border-radius: 8px;

    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.textInputColor};

    background-color: ${({theme}) => theme.inputBgColor};
`