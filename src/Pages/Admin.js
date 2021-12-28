import React from 'react'
import AdminNav from '../Components/Admin/AdminNav'
import unicorn from '../Assets/Images/unicorn.png'

function Admin() {
  return (
    <div >
      <AdminNav />
      <img src={unicorn} className='relative mt-12 w-4/12 mx-auto opacity-30' alt="dabbing unicorn"/>
    </div>
  )
}

export default Admin
