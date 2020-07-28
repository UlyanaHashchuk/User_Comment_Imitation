import React, { useState, useEffect } from 'react'
import { CommentField, Comment, MoreLessButton } from './index.styles'

let findUrlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g

// Change urls to links in full comment(when is open from Show more)
const changeUrlsInFullComment = (formattedComment) => {
  return formattedComment.replace(findUrlRegex, (url, b, c) => {
    let addHttpToUrl = c === 'www.' ? `http://${url}` : url

    return `<a href="${addHttpToUrl}" target="_blank">${url}</a>`
  })
}

const getUrlsFromComment = (comment) => {
  let urlsArray = []

  comment.replace(findUrlRegex, (url) => urlsArray.push(url))

  return urlsArray
}

export default ({ comment, maxSize }) => {
  const [shouldShowMore, setShouldShowMore] = useState(false)

  const isMaxSizeExceeded = comment.length > maxSize

  // Detecting all urls in comment and return them as array
  let urlsArray = getUrlsFromComment(comment)
  let finalComment
  let formattedComment = comment

  finalComment = changeUrlsInFullComment(comment)

  if (isMaxSizeExceeded) {
    if (!shouldShowMore) {
      formattedComment = comment.substring(0, maxSize)

      //Detecting last word in a formattedComment
      let n = formattedComment.split(' ')
      let lastWord = n[n.length - 1]

      // If last cut word is link, then replace it with full normal link
      if (
        lastWord.includes('http') ||
        lastWord.includes('www.') ||
        lastWord.includes('https')
      ) {
        for (let i in urlsArray) {
          if (urlsArray[i].includes(lastWord)) {
            finalComment = formattedComment.replace(lastWord, () => {
              let addHttpToUrl = lastWord.includes('www.')
                ? `http://${urlsArray[i]}`
                : urlsArray[i]

              return `<a href="${addHttpToUrl}" target="_blank">${lastWord}</a>`
            })
          }
        }
      }
    }
  }

  useEffect(() => {
    setShouldShowMore(false)
  }, [comment])

  return (
    <>
      {finalComment && (
        <CommentField>
          <Comment dangerouslySetInnerHTML={{ __html: finalComment }} />
          {isMaxSizeExceeded && (
            <MoreLessButton onClick={() => setShouldShowMore(!shouldShowMore)}>
              {!shouldShowMore ? '...Show more' : <div>Show less</div>}
            </MoreLessButton>
          )}
        </CommentField>
      )}
    </>
  )
}

// Lorem Ipsum is simply dummy text to https://github.com of the printing and typesetting industry. Lorem Ipsum www.google.com when an unknown printer took.
