import React, { useContext, useState } from 'react';
import Switch from "react-switch";
import { ThemeContext } from '../../../contexts/ThemeProvider';
import { SwitchContainer, SwitchLabel } from '../../../styledComponents/styledSwitches';

const SwitchLanguage = () => {
  return (
    <SwitchContainer>
      <SwitchLabel firstLabel>English</SwitchLabel>
      <Switch  
          checked={false}
          onChange={() => {}}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor='#8696a0'
      />
      <SwitchLabel>Español</SwitchLabel>
    </SwitchContainer>
  )
  
}

export default SwitchLanguage