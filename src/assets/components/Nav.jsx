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
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="#">Véhicules</NavLink></li>
                    <li><NavLink to="#">Customizer</NavLink></li>
                    <li><NavLink to="#">Visite</NavLink></li>
                </ul>
            </nav>
        </header>
        
    </>
  )
}

export default Nav