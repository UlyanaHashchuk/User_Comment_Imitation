import React, { useState } from 'react'
import { Component, Textarea, Button } from './index.styles'

export default ({ saveComment }) => {
  const [text, setText] = useState('')

  const handleInputChange = (event) => setText(event.target.value)

  const handleButtonClick = () => {
    saveComment(text)
    setText('')
  }

  return (
    <Component>
      <Textarea
        rows="7"
        cols="40"
        value={text}
        onChange={handleInputChange}
        placeholder="Add comment here..."
      />
      <Button onClick={handleButtonClick}>Save</Button>
    </Component>
  )
}
