import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  const aStyle = {
    borderBottom: 'none',
    fontSize: '1.5rem',
    color: 'black',
    margin: '0 0 0 10px',
  }

  return (
    <div className="footer">
      <a style={aStyle} href="https://github.com/jammar">
        <FaGithub />
      </a>
    </div>
  )
}

export default Footer
