import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoMeli from '../../assets/img/logo_ml.png';
import searchIcon from '../../assets/img/search.png';
import './navbar.scss'

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const searchItems = (event) => {
    event.preventDefault();

    if (search) {
      const URL = `/items?search=${search}`;
      navigate(URL);
    }
  }

  return (
    <header className='navbar container'>
      <Link to='/'>
        <img src={logoMeli} alt='Meli Logo' width='50' />
      </Link>

      <form onSubmit={searchItems} className='navbar__search'>
        <input type='text' placeholder='Nunca dejes de buscar' value={search} onChange={(event) => setSearch(event.target.value)} />
        <button type='submit' className='navbar__btn-search'>
          <img src={searchIcon} alt='Search' width='15' />
        </button>
      </form>
    </header>
  );
}

export default Navbar;