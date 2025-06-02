import React from 'react'
import Content from './Content';

const Header = () => {
  return (
    <div className="h-12 relative"
    style={{
        clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%'
    }}>
      <div className="h-12 fixed w-full">
        <Heading />
      </div>
    </div>
  );
}

const Heading = () =>{
    return (
      <div className="list-none flex items-center justify-between px-4 font-semibold text-lg bg-[#CD9463] h-full">
        <li>Home</li>
        <li>Works</li>
        <li>About</li>
        <li>Contact</li>
      </div>
    );
}

export default Header

