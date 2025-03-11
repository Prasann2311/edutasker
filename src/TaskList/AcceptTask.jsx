import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='h-full w-[350px] flex-shrink-0 bg-red-400 p-5 rounded-xl'>

          <div className='flex items-center justify-between'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
          </div>
             <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
             <p className=' text-sm mt-2'>
                {data.taskDescription} </p>
             <div className='flex justify-between mt-4'>
                    <button className='bg-green-500 py-1 px-2 text-sm '>Mark as completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm '>Mark as failed</button>
                 </div>
      </div>
  )
}

export default AcceptTask
