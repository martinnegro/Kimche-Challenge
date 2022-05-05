import React, { useContext, useState } from 'react';
import Switch from "react-switch";
import { LanguageContext } from '../../../contexts/LangagueContext';
import { ThemeContext } from '../../../contexts/ThemeProvider';
import { SwitchContainer, SwitchLabel } from '../../../styledComponents/styledSwitches';

const SwitchLanguage = () => {
  const { handleSwitchLang } = useContext(LanguageContext);
  const [ checked, setChecked ] = useState(false);
  const handleSwitchCheck = (willCheck) => {
    setChecked(willCheck);
    handleSwitchLang(willCheck)
  };


  return (
    <SwitchContainer>
      <SwitchLabel firstLabel>English</SwitchLabel>
      <Switch  
          checked={checked}
          onChange={handleSwitchCheck}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor='#8696a0'
      />
      <SwitchLabel>Español</SwitchLabel>
    </SwitchContainer>
  )
  
}

export default SwitchLanguage