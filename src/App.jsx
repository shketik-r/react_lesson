import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Frends from './components/Frends/Frends';

import DialogsContainer from './components/Dialogs/Dialogs_Container';
import SandbarContainer from './components/Sandbar/Sandbar_Container';
import FindUsersContainer from './components/FindUsers/FindUsers_Container';
import ProfileContainer from './components/Profile/Profile_Container';
import HeaderContainer from './components/Header/HeaderContainer';




function App(props) {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <SandbarContainer />
      <section className='app_wrapper_content'>
        <Routes>
        
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/profile/*" element={<ProfileContainer />} />

          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/frends" element={<Frends />} />
          <Route path="/users" element={<FindUsersContainer />} />

        </Routes>
      </section>

      <Footer />
    </div>

  );
}

export default App;
