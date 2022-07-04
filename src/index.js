import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

function renderDom() {
  root.render(<BrowserRouter>
    <React.StrictMode>
      <App
        store={store}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  </BrowserRouter>
  );
}

renderDom()

store.subscriber(renderDom)


reportWebVitals();


