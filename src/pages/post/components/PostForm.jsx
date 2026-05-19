import styled from 'styled-components'

import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { SpecialPanel } from './special-panel/SpecialPanel.jsx'
import { useRef } from 'react'
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
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const navigate = useNavigate()
  const requestServer = useServerRequest()

  const onSave = () => {
    const newImageUrl = imageRef.current.value
    const newContent = sanitizeContent(contentRef.current.innerHTML)
    const newTitle = titleRef.current.value

    dispatch(
      savePostAsync(requestServer, {
        id,
        title: newTitle,
        imageUrl: newImageUrl,
        content: newContent,
      })
    ).then(() => {
      navigate(`/post/${id}`)
    })
  }
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
            ref={imageRef}
            defaultValue={imageUrl}
            placeholder="Изображение"
          ></input>
          <input
            ref={titleRef}
            className="title-input"
            placeholder="Заголовок..."
            defaultValue={title}
          ></input>
          <SpecialPanel
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
  }
`
