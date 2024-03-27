import { useState } from "react"
import { Task } from "../utils/data-tasks"


const TaskCard = ({task, updateTaskPoints, updateTaskTitle}: {
    task: Task
    updateTaskPoints: (task: Task, points: number) => void
    updateTaskTitle: (task: Task, title: string) => void
}) => {
    //const [points, setPoints] = useState(task.points || 0)
    const [isEditingTitle, setIsEditingTitle] = useState(false)

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
                <div onClick={() => setIsEditingTitle(true)}>
                    {task.title}
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