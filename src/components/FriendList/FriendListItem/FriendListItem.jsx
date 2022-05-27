import s from './FriendListItem.module.css';

function FriendListItem({ isOnline, avatar, name, id }) {
  const color = isOnline ? 'green' : 'red';

  return (
    <li key={id} className={s.item}>
      <span className={s[color]} />
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
