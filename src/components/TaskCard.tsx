import { useState } from "react"
import { Task } from "../utils/data-tasks"


const TaskCard = ({task, updateTaskPoints, updateTaskTitle}: {
    task: Task
    updateTaskPoints: (task: Task, points: number) => void
    updateTaskTitle: (task: Task, title: string) => void

}) => {
    //const [points, setPoints] = useState(task.points || 0)
    const [isEditingTitle, setIsEditingTitle] = useState(false)
    const [selfVisibility, setSelfVisibility] = useState(true)

    const points = task.points || 0
    const updatePoints = (direction: 'up' | 'down') => {
        const fib = [0,1,2,3,5,8,13]
        const index = fib.indexOf(points)
        const nextIdex = direction === 'up'? index+1: index-1
        const newPoints = fib[nextIdex]
        if(newPoints) {
            updateTaskPoints(task, newPoints)
        }
    }

    const deleteTask = (taskId: string) => {
        fetch(`http://localhost:3000/tasks/${taskId}`, {
          method: "DELETE",
          headers: {
            "Content-Type":"application/json",
          },
        })
        setSelfVisibility(false)
      }
    if(selfVisibility === false) return 
    return <div draggable onDragStart={(e)=> e.dataTransfer.setData("id", task.id)}
    
    className="border rounded-lg p-2 m-2 w-64 shadow-md bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="text-2xl font-semibold text-gray-900">
            { isEditingTitle? (
                <input type="text" 
                autoFocus
                className="w-full"
                onBlur={() => setIsEditingTitle(false)}
                value={task.title}
                onChange={(e) => updateTaskTitle(task, e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter") setIsEditingTitle(false)
                }}
                />
            ): (
                <div className="flex flex-row justify-between items-baseline">
                    <div onClick={() => setIsEditingTitle(true)}>
                        {task.title}
                    </div>
                    <svg onClick={()=>deleteTask(task.id)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="flex-none w-4 h-4 hover:cursor-pointer hover:shadow-md">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                </div>
            )
            }
        </div>
        <div className="flex gap-4 justify-between">
            <div className="font-bold text-slate-600">
                {task.id}
            </div>
            <div className="flex gap-2 items-center font-bold text-slate-600">
                <button className="text-red-500" onClick={(e)=>updatePoints('down')}>-</button>
                <div className="text-indigo-400">{points}</div>
                <button className="text-green-500" onClick={(e)=>updatePoints('up')}>+</button>
            </div>
        </div>
    </div>
}

export default TaskCard