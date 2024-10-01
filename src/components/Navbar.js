import React, { useState } from 'react';
import '../styles/navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ size, setShow, setSelectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState(''); 

  
  const handleSearch = () => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (lowerCaseSearch === 'men') {
      setSelectedCategory('Men');
    } else if (lowerCaseSearch === 'women') {
      setSelectedCategory('Women');
    } else if (lowerCaseSearch === 'kids') {
      setSelectedCategory('Kids');
    } else {
      setSelectedCategory('All'); 
    }
    setShow(true); 
  };

  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => {
          setShow(true);
          setSelectedCategory('All'); 
        }}>
          FASHION
        </span>
        
        
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>

        
        <ul className='cat'>
          <li onClick={() => setSelectedCategory('Men')}>Men</li>
          <li onClick={() => setSelectedCategory('Women')}>Women</li>
          <li onClick={() => setSelectedCategory('Kids')}>Kids</li>
        </ul>
        
        
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <i className="fas fa-shopping-cart"></i>

          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
