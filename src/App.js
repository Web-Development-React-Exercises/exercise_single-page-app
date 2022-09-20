import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Among from './pages/Among';
import Us from './pages/Us';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/among" element={<Among />} />
      <Route path="/us" element={<Us />} />
    </Routes>
  );
}

export default App;
