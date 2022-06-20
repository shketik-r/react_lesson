import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sandbar from './components/Sandbar/Sandbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='app-wrapper'>
    <Header />
    <Sandbar />
    <Profile/>
    <Footer />
  </div>
  );
}

export default App;
