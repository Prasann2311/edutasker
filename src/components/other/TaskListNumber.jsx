import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className=' flex justify-between mt-10 gap-5 screen '>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium'>completed Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>active Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
