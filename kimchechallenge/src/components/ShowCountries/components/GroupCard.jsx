import React from 'react'
import { Accordion } from 'react-accessible-accordion';
import { Group,  GroupTitle } from '../../../styledComponents/styledGroup'
import CountryCard from './CountryCard';


const GroupCard = ({ group }) => {
  return (
    <Group group={group.code}>
        <GroupTitle>{group.name}</GroupTitle>
        <Accordion allowZeroExpanded>
        {
            group.countries.map((country) =>(
                <CountryCard key={country.code} country={country} />
            ))
        }
        </Accordion>
    </Group>
  )
}

export default GroupCard