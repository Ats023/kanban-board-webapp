import { useState } from "react"
import { Task } from "../utils/data-tasks"


const TaskCard = ({task, updateTaskPoints}: {
    task: Task
    updateTaskPoints: (task: Task, points: number) => void
}) => {
    //const [points, setPoints] = useState(task.points || 0)
    const points = task.points || 0
    return <div className="border rounded-lg p-2 m-2 w-64">
        <div className="text-2xl font-semibold text-gray-900">{task.title}</div>
        <div className="flex gap-4 justify-between">
            <div className="font-bold text-slate-600">
                {task.id}
            </div>
            <div className="flex gap-2 items-center font-bold text-slate-600">
                <button className="text-red-500" onClick={(e)=>updateTaskPoints(task, points - 1)}>-</button>
                <div className="text-indigo-400">{points}</div>
                <button className="text-green-500" onClick={(e)=>updateTaskPoints(task, points + 1)}>+</button>
            </div>
        </div>
    </div>
}

export default TaskCard