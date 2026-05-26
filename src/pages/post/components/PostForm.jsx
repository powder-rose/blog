import styled from 'styled-components'

import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { SpecialPanel } from './special-panel/SpecialPanel.jsx'
import { useLayoutEffect, useRef, useState } from 'react'
import { sanitizeContent } from './utils/index.js'
import { useDispatch } from 'react-redux'
import { savePostAsync } from '../../../actions/save-post-async.js'
import { useNavigate } from 'react-router-dom'
import { useServerRequest } from '../../../hooks/index.js'
import { Icon, RoundButton } from '../../../components/index.js'

const PostFormContainer = ({
  post: { id, title, imageUrl, content, publishedAt },
  className,
}) => {
  const dispatch = useDispatch()
  const [imageUrlValue, setImageUrlValue] = useState(imageUrl)
  const [titleValue, setTitleValue] = useState(title)

  useLayoutEffect(() => {
    setTitleValue(title)
    setImageUrlValue(imageUrl)
  }, [title, imageUrl])

  const contentRef = useRef(null)
  const navigate = useNavigate()
  const requestServer = useServerRequest()

  const onSave = () => {
    const newContent = sanitizeContent(contentRef.current.innerHTML)

    dispatch(
      savePostAsync(requestServer, {
        id,
        title: titleValue,
        imageUrl: imageUrlValue,
        content: newContent,
      })
    ).then((post) => {
      if (!post) {
        return
      }

      return navigate(`/post/${post.id}`)
    })
  }

  const onChangeImageUrl = ({ target }) => setImageUrlValue(target.value)
  const onChangeTitle = ({ target }) => setTitleValue(target.value)

  return (
    <div className={className}>
      {imageUrl && (
        <div>
          <img src={imageUrl} className="post-image" alt={title} />
        </div>
      )}
      <div className="post">
        <div className="input-box">
          <input
            onChange={onChangeImageUrl}
            value={imageUrlValue}
            placeholder="Изображение"
          ></input>
          <input
            onChange={onChangeTitle}
            className="title-input"
            placeholder="Заголовок..."
            value={titleValue}
          ></input>
          <SpecialPanel
            id={id}
            title={title}
            publishedAt={publishedAt}
            margin="0"
            saveButton={
              <RoundButton className="post-button" onClick={onSave}>
                <Icon size={20} id={faFloppyDisk} />
              </RoundButton>
            }
          />
        </div>
        <div
          data-placeholder="Статья..."
          contentEditable={true}
          suppressContentEditableWarning={true}
          className="content"
          ref={contentRef}
        >
          {content}
        </div>
      </div>
    </div>
  )
}

export const PostForm = styled(PostFormContainer)`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 100%;

  .input-box > input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
  }

  & .post-image {
    min-width: 500px;
    min-height: 450px;
    border-radius: 15px;
  }

  & .post {
    width: 50%;
    margin-left: 30px;
  }

  & .published {
    margin: 20px 0;
    color: #515054;
  }

  & .post-button {
    border: 1px solid #000;
    min-width: 40px;
  }

  & .input-box {
    display: flex;
    flex-direction: column;
  }

  & .content {
    padding: 10px;
    white-space: pre-line;
    border: 1px solid #000;
    height: 100%;
    min-height: 450px;

    &:empty::before {
      content: attr(data-placeholder);
      color: #888;
      pointer-events: none;
    }
  }
`
