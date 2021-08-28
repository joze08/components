import React from 'react';

const Header: React.FC = () => {
  return(
    <header>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;