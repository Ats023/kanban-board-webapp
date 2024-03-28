import { useState } from 'react'
import { Task, Status, statuses } from '../utils/data-tasks'


const AddTaskForm = ({status, handleCancelForm}:
    {
        status: Status
        handleCancelForm: () => void
        // handleSubmit: (e: React.FormEvent) => void
        // handleChange: (e: React.FormEvent) => void
    }) => {
        const [formData, setFormData] = useState({
            id:"",
            title:"",
            points:"",
            status: status,
        })
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value
            });
          };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission here
            fetch(`http://localhost:3000/tasks`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
            }).then(()=>{return fetch("http://localhost:3000/tasks")})
            console.log(formData);
            handleCancelForm()
        };

        return <div className="fixed inset-x-0 mx-auto z-10 p-2 border rounded-lg flex flex-col justify-evenly items-center w-1/3 h-auto bg-slate-50 shadow-lg">
            <div className="flex flex-col items-center p-2">
                <h2 className="text-2xl font-bold text-slate-800">Add New Task</h2>
                <h3 className="font-bold text-indigo-400">Status: {status}</h3>
            </div>
            <form className="p-2 flex flex-col items-center gap-2" onSubmit={handleSubmit}>
                <div className="flex flex-row items-center gap-3">
                    <label htmlFor="title">Title:</label>
                    <input
                    className="block bg-slate-50 border border-slate-300 hover:bg-slate-100 focus:bg-slate-100"
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </div>
                <div className="flex flex-row items-center gap-3">
                    <label htmlFor="id">Task ID:</label>
                    <input
                    className="block bg-slate-50 border border-slate-300 hover:bg-slate-100 focus:bg-slate-100"
                    type="text"
                    id="taskId"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    />
                </div>
                <div className="flex flex-row items-center gap-3">
                    <label htmlFor="points">Points:</label>
                    <input
                    className="block bg-slate-50 border border-slate-300 hover:bg-slate-100 focus:bg-slate-100"
                    type="number"
                    id="points"
                    name="points"
                    value={formData.points}
                    onChange={handleChange}
                    />
                </div>
                <div className="my-3 flex flex-row justify-between w-full">
                    <button className="block bg-green-500 text-white px-2 py-1 border rounded-md hover:shadow-md" type="submit">Submit</button>
                    <button className="block bg-red-500 text-white px-2 py-1 border rounded-md hover:shadow-md" onClick={()=>handleCancelForm()}>Cancel</button>
                </div>
            </form>
        </div>
    }

    
export default AddTaskForm