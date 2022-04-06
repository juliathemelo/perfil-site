import React from 'react'
import CV from '../../assets/cv_JuliaMelo.pdf'

export const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href='mailto: juliarexsteam@hotmail.com' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
