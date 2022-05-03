import React from 'react'

import { groupByConstants } from '../constants'
import { GroupToggleButton, GroupToggleForm, Label } from '../styledComponents'

const ButtonPanel = ({ onClick, groupBy }) => {
  return (
    <GroupToggleForm>
      <Label>Group by:</Label>
      <GroupToggleButton 
        onClick={onClick}
        first 
        selected={groupBy === groupByConstants.CONTINENT}
        name={ groupByConstants.CONTINENT}
      >
        {groupByConstants.CONTINENT.toUpperCase()}
      </GroupToggleButton>
      <GroupToggleButton 
        onClick={onClick}
        last 
        selected={groupBy === groupByConstants.LANGUAGE}
        name={ groupByConstants.LANGUAGE }
      >
        {groupByConstants.LANGUAGE.toUpperCase()}
      </GroupToggleButton>
    </GroupToggleForm>
  )
}

export default ButtonPanel