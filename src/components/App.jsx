import Profile from './Profile';
import user from './data/user';
import Statistic from './Statistic';
import data from './data/data';
import FriendList from './Friends';
import friends from './data/friends';
import TransactionsList from './TransactionHistory';
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
          stats={user.stats}
        />
        <Statistic title="Upload stats" stats={data} />

        <FriendList items={friends} />

        <TransactionsList
          items={transactions}
          type="Type"
          amount="Amount"
          currency="Currency"
        />
      </div>
    </div>
  );
};

export default App;
