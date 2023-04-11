import React from 'react'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  return (
    <div>
      <style> {`
        h1 {
          padding: 2.5rem 2rem
        }
      `}

      </style>

        <h1>Daniel Verra</h1>
        <HeaderMenu />
    </div>
  )
}

export default Header