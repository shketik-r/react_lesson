import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux_store"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

function renderDom(state) {


  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App/>
        </Provider>

      </React.StrictMode>
    </BrowserRouter>
  );
}

renderDom(store.getState())

store.subscribe(() => {
  let state = store.getState()

  renderDom(state);
})






reportWebVitals();


