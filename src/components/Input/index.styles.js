import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Textarea = styled.textarea`
  margin: 20px;
`

const Button = styled.button`
  height: 35px;
  width: 55px;
  border-radius: 5px;
  border: 1px solid #bd4db4;
  background-color: #f075e6;
  color: #fff;
  margin-bottom: 10px;

  &:hover {
    background-color: #bd4db4;
    cursor: pointer;
  }
`

export { Component, Textarea, Button }
