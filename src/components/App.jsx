

import Profile from './Profile/Profile';
import user from './data/user'
import Statistic from './Statistic/Statistic';
import data from './data/data';
import FriendList from './Friends/FriendList';
import friends from './data/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './data/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />
     <Statistic
        title="Upload stats"
        stats = {data}
        />

        <FriendList
          items = {friends}
        />

        <TransactionHistory
          items={transactions}
          type="Type"
          amount="Amount"
          currency="Amount"
        />
    </div>


      
      
    </div>
  );
};
