import React from 'react';
import Logo from '../assets/Logo';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
       <Logo className="logo-footer" fill="#FFFFFF" />
       <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}
