import React, { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import TaskModal from "./TaskModal";

const TaskCard = ({ task, index, columnId, setTasks }) => {
  const [editing, setEditing] = useState(false);

  const handleDelete = () => {
    setTasks((prev) => ({
      ...prev,
      [columnId]: prev[columnId].filter((t) => t.id !== task.id),
    }));
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            padding: "10px",
            margin: "8px 0",
            backgroundColor:
              task.priority === "High"
                ? "#f8d7da"
                : task.priority === "Medium"
                ? "#ffeeba"
                : "#cce5ff",
            border: "1px solid #999",
            borderRadius: "5px",
            ...provided.draggableProps.style,
          }}
        >
          <strong>{task.title}</strong>
          <p>{task.description}</p>
          <small>{new Date(task.createdAt).toLocaleString()}</small>
          <br />
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>

          {editing && (
            <TaskModal
              task={task}
              onClose={() => setEditing(false)}
              onSave={(updatedTask) => {
                setTasks((prev) => ({
                  ...prev,
                  [columnId]: prev[columnId].map((t) =>
                    t.id === updatedTask.id ? updatedTask : t
                  ),
                }));
                setEditing(false);
              }}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
