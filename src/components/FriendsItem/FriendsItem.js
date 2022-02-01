import s from './FriendsItem.module.css';
import PropTypes from 'prop-types';

function FriendsItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline === true ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsItem;
