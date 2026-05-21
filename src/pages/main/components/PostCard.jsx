import styled from 'styled-components'
import { Icon } from '../../../components/index.js'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const PostCardContainer = ({
  className,
  id,
  title,
  publishedAt,
  commentsCount,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link to={`/post/${id}`} className="link">
        <img className="image" src={imageUrl} alt={title} />
        <div className="post-card-footer">
          <h3>{title}</h3>
          <div className="post-card-info">
            <div>{publishedAt}</div>

            <div className="comments-count">
              {commentsCount}
              <Icon size={20} id={faComment} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export const PostCard = styled(PostCardContainer)`
  display: flex;
  flex-wrap: wrap;
  min-width: 350px;
  max-width: 350px;
  border: 1px solid black;
  border-radius: 15px;
  margin: 15px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

  & .link {
    text-decoration: none;
    color: black;
  }

  & h3 {
    font-size: 18px;
    font-weight: bold;
  }

  & .image {
    min-width: 350px;
    max-width: 350px;
    height: 320px;
    border-radius: 15px 15px 0 0;
  }

  & .post-card-footer {
    display: flex;
    padding: 15px;
    min-height: 150px;
    flex-wrap: wrap;
  }

  & .post-card-info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  & .comments-count {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`
