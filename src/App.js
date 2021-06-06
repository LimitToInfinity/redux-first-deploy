import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nameActions } from './actions/nameActions';

import logo from './logo.svg';
import './App.css';

function App() {

  const state = useSelector(state => state);
  const name = useSelector(state => state.name);

  const dispatch = useDispatch();

  console.log('state', state);
  console.log('name', name);

  useEffect(() => dispatch(nameActions.ericAction));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React { name }
        </a>
      </header>
    </div>
  );
}

export default App;
