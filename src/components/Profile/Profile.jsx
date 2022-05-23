
import PropTypes from 'prop-types';

 function Profile  ({
username,
  tag,
  location,
   avatar,
   followers,
   views,
   likes
  
}) {
   return <div>
   <div >
    <img
      src={avatar}
      alt={username}
      
    />
     <p >{username }</p>
     <p >@{ tag}</p>
     <p >{ location }</p>
      </div>
      <ul>
    <li>
      <span >Followers</span>
          <span >{followers }</span>
    </li>
    <li>
      <span >Views</span>
          <span >{ views}</span>
    </li>
    <li>
      <span >Likes</span>
          <span >{likes }</span>
    </li>
  </ul>
  
   </div>

}

Profile.propTypes = {
  img: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}

export default Profile;