import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let usersData = [
  { name : "Vika" , id: "1"},
  { name : "Bob" , id: "2"}
]

let messagesData = [
  { mess: "Lorem, ipsum dolor sit amet consectetur", id: "1", name: "Ivan" },
  { mess: "Lorem, ipsum dolor", id: "2", name: "Vika" },
]

let postData = [
  {message: 'hi'}, {message: 'good'}, {message: 'traktor'} , {message: 'traktor'}
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App usersData = {usersData}  messagesData={messagesData}  postData={postData}/>
  </React.StrictMode>
);


reportWebVitals();


