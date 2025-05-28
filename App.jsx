import React, { useState, useEffect } from "react";
import TaskBoard from "./TaskBoard";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("taskboard-tasks");
    return stored
      ? JSON.parse(stored)
      : {
          todo: [],
          inprogress: [],
          done: [],
        };
  });

  useEffect(() => {
    localStorage.setItem("taskboard-tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TaskBoard Pro</h1>
      <TaskBoard tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
