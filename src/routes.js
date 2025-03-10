import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from './common/Menu/index';
import PaginaPadrao from './common/PaginaPadrao';
import Sobre from 'pages/Sobre';
import Footer from 'common/Footer';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element ={<PaginaPadrao/>}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
