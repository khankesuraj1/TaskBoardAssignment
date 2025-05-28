import React, { useState } from "react";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";

const COLUMN_TITLES = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

const Column = ({ columnId, tasks, setTasks }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ width: "30%", padding: "10px", border: "1px solid #ccc" }}>
      <h2>{COLUMN_TITLES[columnId]}</h2>
      <button onClick={() => setShowModal(true)}>+ Add Task</button>

      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ minHeight: "200px", marginTop: "10px" }}
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                columnId={columnId}
                setTasks={setTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {showModal && (
        <TaskModal
          onClose={() => setShowModal(false)}
          onSave={(newTask) => {
            setTasks((prev) => ({
              ...prev,
              [columnId]: [...prev[columnId], newTask],
            }));
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Column;
