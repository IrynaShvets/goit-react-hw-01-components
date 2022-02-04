import PropTypes from 'prop-types';
import Container from '../Container/Container';

export default function Profile(props) {
  const {avatar, username, tag, location, followers, views, likes} = props;
  
  return (
    <Container>
      <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt={username}
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

       <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>  
      </div>
    </Container>
  ) 
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired, 
}
