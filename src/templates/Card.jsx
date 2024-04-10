import React from 'react'
import "./Card.css"

export default function Card() {
  return (
    <div className='Card-container'>
     <div>
       <img src='https://picsum.photos/id/237/200/300' alt="profile"/>
      </div>
      <div>
      <h2>this is heading</h2>
      </div>
      <div>
        <span>Star</span><span>rating</span><span>time</span>
      </div>
      <p>this is a paragraph , this paragraph describe about the picture</p>
    </div>
  )
}
