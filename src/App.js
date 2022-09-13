import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import CounterGroup from './features/counter/CounterGroup';

function App() {
  const size = 10;
  return (
    <div className="App">
      <CounterGroup size={size}/>
    </div>
  );
}

export default App;
