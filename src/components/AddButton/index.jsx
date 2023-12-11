import React from 'react';
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div>
      <Link to = {`/saved`}> 
              <button className='mx-5'>View saved tasks</button>
      </Link>
      <Link to={`/create`}>
              <button>Add new task</button>
      </Link>
    </div>
  );
};

export default AddButton;