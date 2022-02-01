import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statisticData from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
