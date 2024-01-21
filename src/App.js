import './App.css';
import Bat from './Components/Bat';
import Ball from './Components/Ball';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Bat/>
        <Ball/>
      </Provider>
    </>
  );
}

export default App;
