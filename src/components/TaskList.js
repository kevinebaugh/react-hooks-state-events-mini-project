import React, { useState } from "react";
import Task from "./Task";

function TaskList({tasksData, categories, filteredCategory}) {
  const [tasks, setTasks] = useState(tasksData)

  function handleDelete(event) {
    const textToDelete = event.target.parentNode.children[1].innerText
    setTasks(tasks.filter( task => task.text !== textToDelete))
  }

  if (filteredCategory) {
    setTasks(
      tasks.filter( (task) => task["category"] == filteredCategory)
    )
  }

  return (
    <div className="tasks">
      {tasks.map( (task, index) => {
        return <Task category={task["category"]} text={task["text"]} key={index} handleDelete={handleDelete}/>
      })}
    </div>
  );
}

export default TaskList;
