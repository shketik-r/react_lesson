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



function App(props) {

  return (
    <div className='app-wrapper'>
      <Header />
      <Sandbar
        usersData={props.store.getState().dialogsPage.usersData}
      />
      <section className='app_wrapper_content'>
        <Routes>
          <Route path="/" element={
            <Profile
              postData={props.store.getState().profilePage.postData}
              newPostTextData={props.store.getState().profilePage.newPostTextData}
              dispatch={props.dispatch}
            />}

          />
          <Route path="/dialogs/*" element={
            <Dialogs
              usersData={props.store.getState().dialogsPage.usersData}
              messagesData={props.store.getState().dialogsPage.messagesData}
              newTextMessages={props.store.getState().dialogsPage.newTextMessages}
              dispatch={props.dispatch}
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
