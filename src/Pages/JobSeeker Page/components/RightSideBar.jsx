import React from 'react'
import { Outlet } from 'react-router-dom';
const RightSideBar = () => {
  return (
    <div className="RightSide">
      <Outlet/>   
    </div>
  );
}

export default RightSideBar