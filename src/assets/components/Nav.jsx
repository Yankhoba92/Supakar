import React from "react";
import { useState } from 'react'
import "../../index.css"
import { NavLink } from "react-router-dom";
NavLink

function Nav() {

  return (
    <>
        <header>
            <nav className="navbar">
                <span>Supakar</span>
                <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink></li>
                    <li>Vehicules</li>
                    <li><NavLink to="/customizer" className={({ isActive }) => (isActive ? 'active' : '')}>Customizer</NavLink></li>
                    <li>Visite</li>
                </ul>
            </nav>
        </header>
        
    </>
  )
}

export default Nav