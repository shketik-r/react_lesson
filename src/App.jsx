import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Sandbar from './components/Sandbar';


function App() {
  return (
    <div className='app-wrapper'>
    < Header />
    <Sandbar />
    <Profile/>
  </div>
  );
}

export default App;
