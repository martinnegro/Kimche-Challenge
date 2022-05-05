import styled from 'styled-components';

export const GroupsContainer = styled.div`
    width: 800px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2%;
`
    
export const Group = styled.div`
    width: 32%;
`   

export const GroupTitle = styled.h3`
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-family: 'Poppins', sans-serif;
`
export const CountryName = styled.span`
    font-family: 'Roboto', sans-serif;
    color: ${({ selected, theme }) => theme.textColor};
`

export const PropsListUl = styled.ul`
    margin: 0
`
export const PropsListLi = styled.li`
    font-family: 'Roboto', sans-serif;
`