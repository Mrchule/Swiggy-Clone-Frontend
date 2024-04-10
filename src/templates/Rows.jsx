import React from 'react'
import Item from "./Item"
export default function Rows() {
    return (
        <div className='row'>
            <div className=' idk d-flex justify-content-between align-item-center h-10'>
                <h3>What in Your mind ?</h3>
                <div>
                    <button className='border border-0 p-0 '> <i class="fa-solid fa-arrow-left m-2  p-2 rounded-circle bg-secondary"></i></button>
                    <button className='border border-0 p-0 '>   <i class="fa-solid fa-arrow-right m-2  p-2 rounded-circle bg-secondary"></i></button>
                </div>
            </div >
            <div className='d-flex border-bottom p-0 ovr'>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
};
