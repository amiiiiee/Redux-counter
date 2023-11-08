import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/count' element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
