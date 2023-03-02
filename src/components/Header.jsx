import React from 'react';
//logo miniatura
import logomin from '../assets/images/logo-min.png'
import logomin30 from '../assets/images/logo-min-30.png'
import logomin40 from '../assets/images/logo-min-40.png'
//icons
//import { IconName } from "react-icons/ri";


const Header = () => {
  return <header className="flex items-center w-full p-4 h-[15vh] ">
        <div className="container mx-auto flex items-center justify-center">
            <img className='h-[13vh]' src={ logomin40 } alt="Jobs Match" />
        </div>
    </header>
}

export default Header