//PROGRESS: 1.04.18
import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import { Task, Status, tasks as initialTasks, statuses } from './utils/data-tasks'
import AddTaskForm from './components/AddTaskForm'

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const columns = statuses.map((status) => {
  const tasksInColumn = tasks.filter((task) => task.status === status)
    return {
      status,
      tasks: tasksInColumn,
    }
  })

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id? task: t
    })
    setTasks(updatedTasks)
  }

  const updateTaskPoints = (task: Task, points: number) => {
    updateTask({...task, points})
  }

  const updateTaskTitle = (task: Task, title: string) => {
    updateTask({...task, title})
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault()
    setHoverDiv(null)
    const id = e.dataTransfer.getData("id")
    const task = tasks.find((task) => task.id === id)
    if(task) updateTask({...task, status})
  }

  const [HoverDiv, setHoverDiv] = useState<Status | null>(null)

  const handleDragEnter = (status: Status) => {
    setHoverDiv(status)
  }

  const [showForm, setShowForm] = useState(false)
  const [formStatus, setFormStatus] = useState<Status>('To-Do')

  const handleTaskForm = (status: Status) => {
  setFormStatus(status)
  setShowForm(true)
  }

  const handleCancelForm = () => {
    setShowForm(false)
  }


  return (
    <>
    {/* TITLE */}
    <h1 className="text-4xl font-bold py-4 px-2 text-slate-700">Kanban-Board</h1>
    {showForm && <AddTaskForm status={formStatus} handleCancelForm={handleCancelForm}/>}
    {/* TASK COLUMNS */}
    <div className='flex divide-x justify-center'>
      {columns.map((column) => (
        <div onDrop={(e) => handleDrop(e, column.status)} 
        onDragOver={(e)=> e.preventDefault()}
        onDragEnter={()=> handleDragEnter(column.status)}
        className='px-2 w-72'>

          {/* TASK COLUMN TOP */}
          <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold py-1 text-gray-800">{column.status}</h2>
          <svg onClick={()=>handleTaskForm(column.status)} 
          xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 onHoverIcon"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </div>

          {/* TASK CARD LIST */}
          <div className="font-bold text-indigo-400">Total: {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}</div>
          <div className={`h-full ${(HoverDiv) === column.status? 'bg-gray-100': ''}`}>
          {column.tasks.map((task) => 
          <TaskCard task = {task} updateTaskPoints={updateTaskPoints} updateTaskTitle={updateTaskTitle}/>
          )}
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
