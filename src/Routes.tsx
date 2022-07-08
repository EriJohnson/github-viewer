import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import Repositories from './pages/Repositories';

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/repositories/:username' element={<Repositories />} />
        <Route path='*' element={<h1>Não encontrado</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
