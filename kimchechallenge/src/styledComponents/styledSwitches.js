import styled from 'styled-components';

export const SwitchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
    gap: 5px;
`

export const SwitchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const SwitchLabel = styled.label`
    font-family: 'Roboto', sans-serif;
    width: 6rem;
    text-align: ${({ firstLabel }) => firstLabel ? 'end' : 'start'};
`