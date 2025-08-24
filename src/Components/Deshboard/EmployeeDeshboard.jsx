import React from 'react'
import Header from '../Other/Header'
import TaskNumber from '../Other/TaskNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDeshboard = ({data}) => {
  console.log(data)
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header data={data}/>
        <TaskNumber data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDeshboard