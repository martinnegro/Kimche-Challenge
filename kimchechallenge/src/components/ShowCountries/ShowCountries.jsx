import React from 'react'

import AccordionCss from '../../styledComponents/accordion.scss';
import { GroupsContainer } from '../../styledComponents/styledGroup';
import GroupCard from './components/GroupCard';

const ShowCountries = ({ filteredCountries }) => {
    console.log(filteredCountries)
    return (
        <GroupsContainer>
            <AccordionCss />
            {
                filteredCountries?.map((group) => {
                    if (group.countries.length === 0) return
                    return (
                        <GroupCard key={group.code} group={group}/>
                    )
                })
            }
        </GroupsContainer>
    )
}   

export default ShowCountries