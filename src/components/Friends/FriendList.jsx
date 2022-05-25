import { getQueriesForElement } from '@testing-library/react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(({ avatar, name, isOnline, id }) => {
        const isActive = isOnline ? 'red' : 'green';
        return (
          <li key={id} className={s.item}>
            <span className={s[isActive]}></span>
            <img
              src={avatar}
              className={s.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
