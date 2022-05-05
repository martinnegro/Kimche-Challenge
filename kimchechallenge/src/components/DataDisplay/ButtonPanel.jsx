import React, { useContext } from 'react'

import { groupByConstants } from '../../constants'
import { LanguageContext } from '../../contexts/LangagueContext'
import { GroupToggleButton, GroupToggleForm, Label } from '../../styledComponents/styledForm'

const ButtonPanel = ({ onClick, groupBy }) => {
  const { selectedLang } = useContext(LanguageContext);
  return (
    <GroupToggleForm>
      <Label>{ selectedLang.toggleGroupingForm.label }</Label>
      <GroupToggleButton 
        onClick={onClick}
        first 
        selected={groupBy === groupByConstants.CONTINENT}
        name={ groupByConstants.CONTINENT}
      >
        { selectedLang.toggleGroupingForm.continents }
      </GroupToggleButton>
      <GroupToggleButton 
        onClick={onClick}
        last 
        selected={groupBy === groupByConstants.LANGUAGE}
        name={ groupByConstants.LANGUAGE }
      >
        { selectedLang.toggleGroupingForm.languages }
      </GroupToggleButton>
    </GroupToggleForm>
  )
}

export default ButtonPanel