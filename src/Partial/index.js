import React from "react";

import {
  TaskDraggable,
  TaskDroppable,
  BoardDraggable,
  BoardDroppable,
} from "./Dnd";

import Board from "./Board";
import Task from "./Task";

export const Boards = ({ boards, children }) => (
  <BoardDroppable droppableId={"board"}>
    {boards.map((board, index) => (
      <BoardDraggable
        key={board.id + index}
        draggableId={board.id}
        index={index}
      >
        <Board data={board}>
          <>{React.cloneElement(children, { board })}</>
        </Board>
      </BoardDraggable>
    ))}
  </BoardDroppable>
);

export const Tasks = ({ tasks, board }) => (
  <TaskDroppable draggableId={board.id}>
    {board?.tasks.map((tsk, index) => {
      const task = tasks[tsk.id];
      return (
        <TaskDraggable
          key={task.id + index}
          draggableId={task.id}
          index={index}
        >
          <Task data={task} />
        </TaskDraggable>
      );
    })}
  </TaskDroppable>
);
