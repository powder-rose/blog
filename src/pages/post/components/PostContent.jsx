import styled from 'styled-components'
import { Icon, RoundButton } from '../../../components'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

const PostContentContainer = ({
  post: { title, imageUrl, content, publishedAt },
  className,
}) => {
  return (
    <div className={className}>
      {imageUrl && (
        <div>
          <img src={imageUrl} className="post-image" alt={title} />
        </div>
      )}
      <div className="post">
        <div className="control-panel">
          <h2 className="h2-post">{title}</h2>
          <RoundButton className="post-button">
            {' '}
            <Icon size={20} id={faPenToSquare} />
          </RoundButton>
          <RoundButton className="post-button">
            <Icon size={20} id={faTrash} />
          </RoundButton>
        </div>

        <div className="published">{publishedAt}</div>
        <div className="content">{content}</div>
      </div>
    </div>
  )
}

export const PostContent = styled(PostContentContainer)`
  display: flex;
  margin: 0 auto;
  align-items: center;

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

  & .control-panel {
    display: flex;
    gap: 14px;
  }

  & .h2-post {
    margin-right: 30px;
  }

  & .control-panel {
    min-width: 500px;
  }
`
