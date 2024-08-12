import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/paginas/Home'; 
import Header from './components/cabecera/Header';
import Analisis from './components/paginas/Analisis'; 
import './App.css';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analisis" element={<Analisis />} />
    </Routes>
  </Router>
);
}

export default App;
