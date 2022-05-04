import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { CountryName, Group, GroupsContainer, GroupTitle } from '../../styledComponents/styledGroup'
import CountryPropsList from './CountryPropsList';

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
                                                <span role="img">{country.emoji}</span><CountryName> {country.name}</CountryName>       
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <CountryPropsList country={country}/>
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