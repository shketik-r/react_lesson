import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
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
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sandbar 
         usersData={props.state.dialogsPage.usersData}
        />
        <section className='app_wrapper_content'>
          <Routes>
            <Route path="/" element={<Profile
              postData={props.state.profilePage.postData}
              addPost={props.addPost} />}
            />
            <Route path="/dialogs/*" element={<Dialogs
              usersData={props.state.dialogsPage.usersData}
              messagesData={props.state.dialogsPage.messagesData} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/frends" element={<Frends />} />

          </Routes>
        </section>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
