import React from 'react'
import Cards from "./templates/Cards.jsx"
import "./App.css"
import Header from "./templates/Header.jsx"
import Rows from "./templates/Rows.jsx"
import Card from './templates/Card.jsx'

export default function App() {
  return (
    <div className='Container'>
    <div>
      <Header/>
    </div>
    <div className='main'>
     <Rows/>
    <Cards/>
    </div>
    </div>
  )
}
