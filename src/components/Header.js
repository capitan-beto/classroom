import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <div className='layout'>
      <style> {`
        h1 {
          padding: 2.5rem 2rem
        }
      `}

      </style>

        <h1>Daniel Verra</h1>
        <Menu/>
    </div>
  )
}

export default Header