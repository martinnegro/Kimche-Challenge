import React from 'react';
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { CountryName } from '../../../styledComponents/styledGroup'
import CountryPropsList from './CountryPropsList';

const CountryCard = ({ country }) => {
  return (
    <AccordionItem key={country.code}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <span role="img">{country.emoji || '-'}</span><CountryName> {country.name || '-'}</CountryName>       
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <CountryPropsList country={country}/>
        </AccordionItemPanel>
    </AccordionItem>
  )
}

export default CountryCard