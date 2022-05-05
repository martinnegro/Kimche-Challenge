import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LangagueContext';
import { Input } from '../../styledComponents';

const NameInput = ({ value, onChange }) => {
  const { selectedLang } = useContext(LanguageContext)
  return (
    <Input type='text' name="name" value={value} onChange={onChange} placeholder={selectedLang.inputPlaceholder}/>
  )
}

export default NameInput;