import styled from 'styled-components'

const CommentField = styled.div`
  width: 300px;
  max-width: 300px;
  padding: 5px;
  margin-left: 20px;
  border-left: 1px solid #f075e6;
`

const Comment = styled.span`
  word-wrap: break-word;
`

const MoreLessButton = styled.span`
  cursor: pointer;
  font-weight: bold;
`

export { CommentField, MoreLessButton, Comment }
