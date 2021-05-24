import React, { memo } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

export const TaskDraggable = memo(({ draggableId, index, children }) => (
  <>
    <Draggable draggableId={draggableId} index={index}>
      {(provided, _) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  </>
));

export const TaskDroppable = memo(({ draggableId, children }) => (
  <>
    <Droppable droppableId={draggableId} type={"CONTENT"}>
      {(provided, _) => (
        <div {...provided.droppableProps}>
          <div ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  </>
));

export const BoardDraggable = memo(({ draggableId, index, children }) => (
  <>
    <Draggable draggableId={draggableId} index={index}>
      {(provided, _) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <div {...provided.dragHandleProps}>
            {children}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Draggable>
  </>
));

export const BoardDroppable = memo(({ droppableId, children }) => (
  <>
    <Droppable droppableId={droppableId} type="COLUMN" direction="horizontal">
      {(provided) => (
        <>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div style={{ display: "flex" }}>{children}</div>
          </div>
          {provided.placeholder}
        </>
      )}
    </Droppable>
  </>
));
