import React from "react";
import Task from "./Task";

export default ( {tasks} ) => {
    return (
        <ul className="list-group">
            {tasks.map(task => {
                return (
                <li key={task.id} className="list-group-item">
                    <Task task={task}/>
                </li>
                )
            })}
        </ul>
    );
}