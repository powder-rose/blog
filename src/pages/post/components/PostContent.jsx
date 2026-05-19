import styled from 'styled-components'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { SpecialPanel } from './special-panel/SpecialPanel.jsx'
import { Icon, RoundButton } from '../../../components/index.js'
import { useNavigate } from 'react-router-dom'

const PostContentContainer = ({
  post: { id, title, imageUrl, content, publishedAt },
  className,
}) => {
  const navigate = useNavigate()

  return (
    <div className={className}>
      {imageUrl && <img src={imageUrl} className="post-image" alt={title} />}
      <div>
        <h2 className="h2-post">{title}</h2>
        <SpecialPanel
          publishedAt={publishedAt}
          title={title}
          editButton={
            <RoundButton
              className="post-button"
              onClick={() => {
                navigate(`/post/${id}/edit`)
              }}
            >
              <Icon size={20} id={faPenToSquare} />
            </RoundButton>
          }
          margin="10px"
        />
        <div className="content">{content}</div>
      </div>
    </div>
  )
}

export const PostContent = styled(PostContentContainer)`
  display: flex;

  & .post-image {
    width: 500px;
    height: 450px;
    border-radius: 15px;
    flex-shrink: 0;
    margin: 20px;
  }

  & .h2-post {
    margin-right: 30px;
    min-width: 100%;
  }
  & .content {
    width: 80%;
    white-space: pre-line;
  }
`
