import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import Branches from './pages/Branches';
import Commits from './pages/Commits';
import Repositories from './pages/Repositories';

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/repositories/:owner' element={<Repositories />} />
        <Route
          path='/repositories/:owner/:repo/branches'
          element={<Branches />}
        />
        <Route
          path='/repositories/:owner/:repo/branches/:branch'
          element={<Commits />}
        />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
