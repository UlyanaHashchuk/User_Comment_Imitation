import styled from 'styled-components'

const ThemeButtons = styled.div`
  margin: 10px;
`

const LightButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  padding: 5px;
  margin: 5px;

  &:hover {
    cursor: pointer;
  }
`

const DarkButton = styled(LightButton)`
  border: 1px solid white;
  background-color: black;
  color: white;
`

export { ThemeButtons, LightButton, DarkButton }
