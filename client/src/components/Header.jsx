import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="header-container">
      <div className="header-left">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
          <img src="/logo.png" alt="UnEarthed Logo" />
          <h1>UnEarthed</h1>
        </Link>
      </div>
      <div className="header-right">
        <button onClick={() => navigate('/')}>Home</button>
      </div>
    </header>
  )
}

export default Header
