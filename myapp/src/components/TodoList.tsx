import React, { useState, ChangeEvent, FormEvent } from "react";
import TodoItem from "./Todoitem";

function TodoList(){
    const [tasks, setTasks] = React.useState(["pon mas tareas como esta!"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newTask.trim() !== ""){
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const handleDeleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>La meva Llista de Tasques</h2>
            <ul>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <TodoItem  content={task} />
                        <button onClick={() => handleDeleteTask(index)}>x</button>
                    </div>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Afegeix una noca tasca"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default TodoList;