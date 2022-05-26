import s from './FriendListItem.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  const color = isOnline ? 'green' : 'red';

  return (
    <>
      <span className={s[color]}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

export default FriendListItem;
