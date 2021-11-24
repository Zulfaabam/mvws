import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/Find" className="link nav-link">
        Find
      </NavLink>
      <NavLink to="/actor" className="link nav-link">
        Actor
      </NavLink>
      <NavLink to="/about" className="link nav-link">
        About
      </NavLink>
    </div>
  )
}
