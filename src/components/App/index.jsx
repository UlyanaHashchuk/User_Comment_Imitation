import React, { useState } from 'react'
import Input from '../Input'
import SmartText from '../SmartText'
import GlobalStyle from './globalStyle'
import { ThemeProvider } from 'styled-components'
import { ThemeButtons, LightButton, DarkButton } from './index.styles'

const theme = {
  isDark: false,
  color: {
    black: 'black',
    white: 'white',
  },
}

export default () => {
  const [comment, setComment] = useState('')
  const [isDark, setIsDark] = useState(false)

  const maxSize = 50

  const appTheme = { ...theme, isDark }

  const saveComment = (text) => setComment(text)

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <ThemeButtons>
          <LightButton onClick={() => setIsDark(false)}>
            Light theme
          </LightButton>
          <DarkButton onClick={() => setIsDark(true)}>Dark theme</DarkButton>
        </ThemeButtons>
        <Input saveComment={saveComment} />
        <SmartText comment={comment} maxSize={maxSize} />
      </ThemeProvider>
    </>
  )
}
