import React from 'react'
import { PropsListUl, PropsListLi } from '../../../styledComponents/styledGroup'

const CountryPropsList = ({ country }) => {
    
  return (
    <PropsListUl>
        <PropsListLi><span role="img" aria-label='capital'>🌆 </span> {country.capital || '-'}</PropsListLi>
        <PropsListLi><span role="img" aria-label='currency'>💸 </span> {country.currency || '-'}</PropsListLi>
        <PropsListLi><span role="img" aria-label='prefix phone'>📞 </span> {country.phone || '-'}</PropsListLi>
    </PropsListUl>
  )
}

export default CountryPropsList