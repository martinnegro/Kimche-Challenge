import React from 'react'

const Input = ({ value, onChange }) => {
  return (
    <input type='text' value={value} onChange={onChange} placeholder="Start writing a country name"/>
  )
}

export default Input