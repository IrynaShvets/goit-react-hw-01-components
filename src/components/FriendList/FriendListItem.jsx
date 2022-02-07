import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <Item>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="65" />
      <Name>{name}</Name>
    </Item>
  );
}
