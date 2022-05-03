import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { Group, GroupsContainer, GroupTitle } from '../styledComponents'

const ShowCountries = ({ filteredCountries }) => {
    console.log(filteredCountries)
    return (
        <GroupsContainer>
            {
                filteredCountries?.map((key) => {
                    if (key.countries.length === 0) return
                    return (
                        <Group key={key.code}>
                            <GroupTitle>{key.name}</GroupTitle>
                            <Accordion allowZeroExpanded>
                            {
                                key.countries.map((country) =>(
                                    <AccordionItem key={country.code}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <span role="img">{country.emoji} </span>{country.name}       
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <ul>
                                                <li><span role="img" aria-label='capital'>🌆 </span> {country.capital}</li>
                                                <li><span role="img" aria-label='currency'>💸 </span> {country.currency}</li>
                                                <li><span role="img" aria-label='prefix phone'>📞 </span> {country.phone}</li>
                                            </ul>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))
                            }
                            </Accordion>
                        </Group>
                    )
                })
            }
        </GroupsContainer>
    )
}   

export default ShowCountries