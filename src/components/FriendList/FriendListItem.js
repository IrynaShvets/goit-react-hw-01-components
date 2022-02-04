import PropTypes from "prop-types";

export default function FriendListItem(friends) {
    const {  isOnline, avatar, name } = friends;
    return (
            <li>
                <span>{isOnline}</span>
                <img src={avatar} alt={name} width="48" />
                <p>{name}</p>
            </li>
    )
}

FriendListItem.propTypes = {
 
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
}
