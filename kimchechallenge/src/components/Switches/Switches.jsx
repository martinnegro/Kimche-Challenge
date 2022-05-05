import React from 'react'
import { SwitchesContainer } from '../../styledComponents/styledSwitches'
import SwitchLanguage from './SwitchLanguage/SwitchLanguage'
import SwitchTheme from './SwitchTheme/SwitchTheme'
const Switches = () => {
  return (
      <SwitchesContainer>
          <SwitchTheme />
          <SwitchLanguage />
      </SwitchesContainer>
  )
}

export default Switches