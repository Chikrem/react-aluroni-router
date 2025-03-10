import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';import  Inicio  from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from './common/menu/index';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}
