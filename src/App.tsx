import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import { Task, Status, tasks, statuses } from './utils/data-tasks'

function App() {
 const columns = statuses.map((status) => {
  const tasksInColumn = tasks.filter((task) => task.status === status)
  return {
    status,
    tasks: tasksInColumn,
  }
 })
  return (
    <>
    <h1 className="text-4xl font-semibold py-4 px-2">Kanban-Board</h1>
    <div className='flex divide-x justify-center'>
      {columns.map((column) => (
        <div className='px-2'>
          <h2 className="text-2xl font-semibold py-2">{column.status}</h2>
          {column.tasks.map((task) => <TaskCard task = {task} />)}
        </div>
      ))}
    </div>
    </>
  )
}

export default App
