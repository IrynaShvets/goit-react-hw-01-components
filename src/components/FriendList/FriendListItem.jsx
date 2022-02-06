import PropTypes from 'prop-types';

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
/* <div
        style={{
          width: '10px',
          heigh: '10px',
          borderRadius: '50%',
          background: isOnline ? 'green' : 'red',
        }}
      ></div> */
