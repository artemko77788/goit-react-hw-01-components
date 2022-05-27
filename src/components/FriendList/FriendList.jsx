import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(item => {
        return (
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
            id={item.id}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
