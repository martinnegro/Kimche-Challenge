import React from 'react';
import { Input } from '../styledComponents';

const NameInput = ({ value, onChange }) => {
  return (
    <Input type='text' name="name" value={value} onChange={onChange} placeholder="Start writing a country name"/>
  )
}

export default NameInput;