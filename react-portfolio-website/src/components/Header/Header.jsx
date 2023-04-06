import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Here is just my profile</h5>
        <h1>Julia de Melo</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={me} alt="me"/>
        </div>
        <h5 className="assign">by: julia</h5>
      </div>
    </header>
  )
}

export default Header
