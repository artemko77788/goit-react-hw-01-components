import Profile from './Profile';
import user from './data/user';
import Statistic from './Statistic';
import data from './data/data';
import FriendList from './Friends';
import friends from './data/friends';
import TransactionsList from './TransactionsList';
import transactions from './data/transactions';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
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
        <Statistic title="Upload stats" stats={data} />

        <FriendList items={friends} />

        <TransactionsList
          items={transactions}
          type="Type"
          amount="Amount"
          currency="Amount"
        />
      </div>
    </div>
  );
};

export default App;
