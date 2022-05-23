import PropTypes from 'prop-types';


function FriendList( {items} ) {

 return (<ul>{
    items.map(({ avatar, name, isOnline, id }) =>
    <li key={id}>
      <span >{isOnline }</span>
        <img src={avatar}
             alt="User avatar" width="48" />
      <p >{ name}</p>
    </li>
 )}
  
</ul>)
  
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
}


export default FriendList



  