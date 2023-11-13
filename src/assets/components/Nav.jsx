import React from "react";
import { useState } from 'react'
import "../../index.css"

function Nav() {

  return (
    <>
        <header>
            <nav className="navbar">
                <span>Supakar</span>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Véhicules</a></li>
                    <li><a href="#">Customizer</a></li>
                    <li><a href="#">Visite</a></li>
                </ul>
            </nav>
        </header>
        
    </>
  )
}

export default Nav