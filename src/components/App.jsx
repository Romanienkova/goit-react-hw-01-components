import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';

import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;