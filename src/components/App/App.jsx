import Profile from '../Profile';
import user from '../../data/user';
import Statistic from '../Statistics';
import data from '../../data/data';
import FriendList from '../FriendList';
import friends from '../../data/friends';
import TransactionHistory from '../TransactionHistory';
import transactions from '../../data/transactions';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <TransactionHistory
        items={transactions}
        typeHeader="Type"
        amountHeader="Amount"
        currencyHeader="Currency"
      />{' '}
    </div>
  );
};

export default App;
