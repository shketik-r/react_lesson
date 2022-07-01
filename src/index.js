import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewText, addMessages, updateNewMessage, subscriber } from "./redux/state"

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderDom() {
  root.render(<BrowserRouter>
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewText={updateNewText}
        addMessages={addMessages}
        updateNewMessage={updateNewMessage}
      />
    </React.StrictMode>
  </BrowserRouter>
  );
}

renderDom(state)
subscriber(renderDom)

reportWebVitals();


