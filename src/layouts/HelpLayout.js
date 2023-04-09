import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Website help page</h2>
      <p>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of ...</p>

      <nav>
        <NavLink to="faq">View FAQ</NavLink>
        <NavLink to="contact">Contact US</NavLink>

      </nav>
      <Outlet/>
    </div>
  )
}
