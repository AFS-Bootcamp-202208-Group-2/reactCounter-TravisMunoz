import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import CounterGroup from './features/counter/CounterGroup';
import MultipleCounter from './features/counter/MultipleCounter';

function App() {
  const size = 10;
  return (
    <div className="App">
      <MultipleCounter/>
    </div>
  );
}

export default App;
