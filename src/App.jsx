import './App.css';
import { Route, Routes } from 'react-router-dom';

import Sandbar from './components/Sandbar/Sandbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Frends from './components/Frends/Frends';
import DialogsContainer from './components/Dialogs/Dialogs_Container';
import SandbarContainer from './components/Sandbar/Sandbar_Container';



function App(props) {

  return (
    <div className='app-wrapper'>
      <Header />
      <SandbarContainer
        store={props.store}
      />
      <section className='app_wrapper_content'>
        <Routes>
          <Route path="/" element={
            <Profile
              store={props.store}
            />}

          />
          <Route path="/dialogs/*" element={
            <DialogsContainer
              store={props.store}
             
            />}

          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/frends" element={<Frends />} />

        </Routes>
      </section>

      <Footer />
    </div>

  );
}

export default App;
