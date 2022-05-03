import styled from 'styled-components';

export const Title = styled.h1`

`

export const GroupsContainer = styled.div`
    width: 800px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2%;
        
`
    
export const Group = styled.div`
    border: solid 1px black;
    border-radius: 2px;
    width: 32%;
`   

export const GroupTitle = styled.h3`
    text-align: center;
    margin-block: 0.5rem
`

export const Input = styled.input`
    width: 100%;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;

    border: solid 2px grey;
    border-radius: 2rem
`
export const GroupToggleForm = styled.form`
    width: 100%;
    border: solid 2px #007bff;
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

    color: #007bff
`

export const GroupToggleButton = styled.button`
    flex-grow: 1;
    padding: 0.5rem;
    text-align: center;

    border-top: 2px solid #007bff;
    border-bottom: none;
    border-left: ${({ first }) => first ? '0' : '1px solid #007bff'};
    border-right: ${({ last }) => last ? '0' : '1px solid #007bff'};

    background-color: ${({ selected }) => selected ? '#007bff' : '#fff'};
    color: ${({ selected }) => selected ? '#fff' : '#007bff'};
    cursor:  ${({ selected }) => selected ? 'default' : 'pointer'};
    

    &:hover {
        text-shadow: 0px 0px 1px #007bff;
    }

    transition: all 400ms ease;
`