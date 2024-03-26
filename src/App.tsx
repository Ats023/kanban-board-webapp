//PROGRESS: 1.04.18
import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import { Task, Status, tasks as initialTasks, statuses } from './utils/data-tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const columns = statuses.map((status) => {
  const tasksInColumn = tasks.filter((task) => task.status === status)
  return {
    status,
    tasks: tasksInColumn,
  }
 })

 const updateTaskPoints = (task: Task, points: number) => {
  const updatedTasks = tasks.map((t) => {
    if(t.id === task.id) return {
      ...t,
      points,
    }
    else return t
  })
  setTasks(updatedTasks)
 }

  return (
    <>
    <h1 className="text-4xl font-bold py-4 px-2 text-slate-700">Kanban-Board</h1>
    <div className='flex divide-x justify-center'>
      {columns.map((column) => (
        <div className='px-2'>
          <h2 className="text-2xl font-bold py-1 text-gray-800">{column.status}</h2>
          <p className="font-bold text-indigo-400">Total: {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}</p>
          {column.tasks.map((task) => 
          <TaskCard task = {task} updateTaskPoints={updateTaskPoints} />
          )}
        </div>
      ))}
    </div>
    </>
  )
}

export default App
