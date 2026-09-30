import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="main-content" style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>404 - Page Not Found</h1>
      <p style={{ color: '#6e6e73' }}>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: '#0071e3', textDecoration: 'none', fontWeight: 'bold' }}>
        Return to Home Page
      </Link>
    </main>
  )
}

export default NotFound
