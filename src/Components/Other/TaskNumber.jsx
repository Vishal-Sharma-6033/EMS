import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='p-10 py-6 px-9 w-[40%] bg-yellow-400 rounded-xl'>
            <h2 className='text-3xl'>{data.taskSummary.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='p-10 py-6 px-9 w-[45%] bg-blue-400 rounded-xl'>
            <h2 className='text-3xl'>{data.taskSummary.newTask}</h2>
            <h3 className='text-xl font-medium'>Complete Task</h3>
        </div>
        <div className='p-10 py-6 px-9 w-[45%] bg-green-400 rounded-xl'>
            <h2 className='text-3xl'>{data.taskSummary.newTask}</h2>
            <h3 className='text-xl font-medium'>Accept Task</h3>
        </div>
        <div className='p-10 py-6 px-9 w-[45%] bg-red-400 rounded-xl'>
            <h2 className='text-3xl'>{data.taskSummary.newTask}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumber