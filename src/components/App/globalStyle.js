import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ${({ theme: { color, isDark } }) => {
      const fontColor = isDark ? color.white : color.black
      const backgroundColor = isDark ? color.black : color.white

      return css`
        background-color: ${backgroundColor};
        color: ${fontColor};
      `
    }}
  a {
    text-decoration: none;
  }
`

export default GlobalStyle
