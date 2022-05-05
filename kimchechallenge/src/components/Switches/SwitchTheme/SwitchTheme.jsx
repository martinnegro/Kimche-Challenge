import React, { useContext, useState } from 'react';
import Switch from "react-switch";
import { ThemeContext } from '../../../contexts/ThemeProvider';
import { SwitchContainer, SwitchLabel } from '../../../styledComponents/styledSwitches';
const SwitchTheme = () => {
    const changeTheme = useContext(ThemeContext)
    const [ checked, setChecked ] = useState(false);
    const handleSwitch = (willCheck) => {
      setChecked(willCheck);
      changeTheme(willCheck);
    };
  return (
    <SwitchContainer>
      <SwitchLabel firstLabel>Ligth mode</SwitchLabel>
      <Switch  
          checked={checked}
          onChange={handleSwitch}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor='#8696a0'
      />
      <SwitchLabel>Dark mode</SwitchLabel>
    </SwitchContainer>
  )
}

export default SwitchTheme