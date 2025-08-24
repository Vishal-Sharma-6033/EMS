import React from 'react'
import Header from '../Other/Header'
import TaskNumber from '../Other/TaskNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDeshboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header/>
        <TaskNumber/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDeshboard