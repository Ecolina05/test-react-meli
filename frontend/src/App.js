import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import ItemDetails from './pages/ItemDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <section className='container h-full'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/items' element={<ResultsPage />} />
          <Route path='/items/:id' element={<ItemDetails />} />
          <Route path='/items/:id/:param' element={<ItemDetails />} />
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
