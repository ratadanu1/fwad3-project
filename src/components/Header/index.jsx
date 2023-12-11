import React from 'react';
import AddButton from '../AddButton';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='flex flex-row justify-between py-10'>
      <Link to = {`/`}> 
        <h1>ToDo App</h1>
      </Link>

      <AddButton />
    </header> 
  );
};

export default Header;