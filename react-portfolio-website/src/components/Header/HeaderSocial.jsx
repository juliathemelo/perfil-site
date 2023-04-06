import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaPaste} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/juliameloalbuquerque/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/juliathemelo' target="_blank"><FaGithub /></a>
        <a href='' target="_blank"><FaPaste /></a>
    </div>
  )
}

export default HeaderSocial