import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { name: "Task 1", status: "done" },
    { name: "Task 2", status: "not done" },
    { name: "Task 3", status: "done" },
  ]);

  
  const toggleStatus = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].status =
      updatedTasks[index].status === "done"
        ? "not done"
        : "done";

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Employee Task List</h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.name}</strong> – Status:{" "}
            <span>{task.status}</span>

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => toggleStatus(index)}
            >
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
