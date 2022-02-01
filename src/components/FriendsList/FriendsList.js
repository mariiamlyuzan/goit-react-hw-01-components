import s from './FriendsList.module.css';
import PropTypes from 'prop-types';
import FriendsItem from '../FriendsItem/FriendsItem';

function FriendsList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
