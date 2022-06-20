import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sandbar from './components/Sandbar/Sandbar';


function App() {
  return (
    <div className='app-wrapper'>
    <Header />
    <Sandbar />
    <Profile/>
  </div>
  );
}

export default App;
