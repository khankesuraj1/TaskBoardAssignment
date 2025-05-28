import React from "react";
import Column from "./Column";
import { DragDropContext } from "@hello-pangea/dnd";

const TaskBoard = ({ tasks, setTasks }) => {
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;
    const sourceTasks = [...tasks[sourceCol]];
    const [movedTask] = sourceTasks.splice(source.index, 1);

    const destTasks = [...tasks[destCol]];
    destTasks.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [sourceCol]: sourceTasks,
      [destCol]: destTasks,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Object.keys(tasks).map((columnId) => (
          <Column
            key={columnId}
            columnId={columnId}
            tasks={tasks[columnId]}
            setTasks={setTasks}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
