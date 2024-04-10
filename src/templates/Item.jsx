import React from 'react';
import "./Item.css"

export default function Item() {
  return (
    <div>
      <div className='items  p-0'>
        <img src="https://picsum.photos/id/247/200/300" alt="image" />
        <h3>Name</h3>
      </div>
    </div>
  )
}
