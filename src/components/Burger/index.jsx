import { useState } from 'react';
import logo from '../../../src/logo.svg';
import SBurger from './style';

export default function Burger() {
  const [showLinks, setShowlinks] = useState(false);
  const handleShowLinks = () => {
    setShowlinks(!showLinks);
  };
  return (
    <SBurger>
      <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'} `}>
        <div className='navbar_logo'>
          {' '}
          <img src={logo} alt='logo' />
        </div>
        <ul className='navbar_links'>
          <li className='navbar_item slideInDown-1'>
            <a href='' className='navbar_link'>
              Acceuil
            </a>
          </li>
          <li className='navbar_item slideInDown-2'>
            <a href='' className='navbar_link'>
              Boutique
            </a>
          </li>
          <li className='navbar_item slideInDown-3'>
            <a href='' className='navbar_link'>
              Panier
            </a>
          </li>
          <li className='navbar_item slideInDown-4'>
            <a href='' className='navbar_link'>
              SAV
            </a>
          </li>
          <li className='navbar_item slideInDown-5'>
            <a href='' className='navbar_link'>
              Contact
            </a>
          </li>
        </ul>
        <button className='navbar_burger' onClick={handleShowLinks}>
          <span className='burger-bar'></span>
        </button>
        <div className='searchbar'></div>
      </nav>
    </SBurger>
  );
}
