import React, { useState } from "react";
import { addTask } from "./api";

const AddTask = ({ onTaskAdded }) => {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = await addTask({ name: taskName });
        setTaskName("");
        onTaskAdded(newTask); // Notify parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
