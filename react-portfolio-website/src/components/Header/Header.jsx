import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Julia de Melo</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={me} alt="me"/>
        </div>
      </div>
    </header>
  )
}

export default Header
