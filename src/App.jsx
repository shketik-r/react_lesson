import './App.css';
import Sandbar from './components/Sandbar/Sandbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Music from './components/Music/Music';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sandbar />
        <section className='app_wrapper_content'>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </section>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
