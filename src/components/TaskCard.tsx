import { useState } from "react"
import { Task } from "../utils/data-tasks"


const TaskCard = ({task}: {
    task: Task
}) => {
    const [points, setPoints] = useState(task.points)
    return <div className="border rounded-lg p-2 m-2 w-64">
        <div className="text-2xl font-semibold">{task.title}</div>
        <div className="flex gap-4 justify-between">
            <div>
                {task.id}
            </div>
            <div>
                {points}
                <button onClick={(e)=>setPoints(points + 1)}>+</button>
            </div>
        </div>
    </div>
}

export default TaskCard