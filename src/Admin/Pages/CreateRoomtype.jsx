import React from 'react'

const CreateRoomtype = () => {
  return (
    <div>
        <form action="">
            <h3>Create Room Type</h3>
            <div className=' d-flex flex-column p-4 '>
            <input type="text" placeholder='Room type' />
            <button className='mt-3'>add</button>
            </div>
        </form>
      
    </div>
  )
}

export default CreateRoomtype
