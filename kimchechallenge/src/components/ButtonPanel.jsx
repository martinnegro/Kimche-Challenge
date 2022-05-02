import React from 'react'

import { groupByConstants } from '../constants'

const ButtonPanel = ({ onClick }) => {
  return (
    <form onClick={onClick} >
      <label>Group by:</label>
      <button name={ groupByConstants.CONTINENT }>{groupByConstants.CONTINENT.toUpperCase()}</button>
      <button name={ groupByConstants.LANGUAGE }>{groupByConstants.LANGUAGE.toUpperCase()}</button>
    </form>
  )
}

export default ButtonPanel