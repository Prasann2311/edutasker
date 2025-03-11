import React, { useState } from 'react'

const Header = (props) => {
  // console.log(data);

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')

  // }else{
  //   setUsername(data.firstName)
  // }
 const logOutUser=()=>{
   localStorage.setItem('loggedInUser','')

   props.changeUser('')
  //  window.location.reload()
 }


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>PRASANN👋</span></h1>
      <h1 className="text-5xl font-bold text-emerald-600">EduTasker</h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-1 rounded-sm mb-3'>Log out</button>
    </div>
  )
}

export default Header
