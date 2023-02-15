import React from 'react'

type Props = {
  name: String
}

const Form = ({ name }: Props) => {
  return (
    <label>
      <span>{name}</span>
      <input type="text" />
    </label>
  )
}

export default Form