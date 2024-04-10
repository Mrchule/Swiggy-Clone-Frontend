import Card from "./Card.jsx"

export default function Cards() {
  return (
    <div className='cards'>
     <div>
     <div className=' idk d-flex justify-content-between align-item-center h-10'>
                <h3>What in Your mind ?</h3>
                <div>
                    <button className='border border-0 p-0 '> <i class="fa-solid fa-arrow-left m-2  p-2 rounded-circle bg-secondary"></i></button>
                    <button className='border border-0 p-0 '>   <i class="fa-solid fa-arrow-right m-2  p-2 rounded-circle bg-secondary"></i></button>
                </div>
            </div >
     </div>
     <div className="d-flex overflow-hidden">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
     </div>
    </div>
  )
}
