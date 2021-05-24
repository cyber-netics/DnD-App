import React, { createContext, useReducer } from "react";
const initialState = {};

export const scrumboardReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BOARD":
      return {
        ...state,
        boards: action.payload,
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: action.payload.tasks,
        },
      };

    default:
      return state;
  }
};

export const ScrumboardContext = createContext(initialState);

export const ScrumboardProvider = ({ initState, children }) => {
  const [state, dispatch] = useReducer(scrumboardReducer, {
    ...initialState,
    ...initState,
  });

  const dispatcher = {
    updateBoard: (board) => {
      dispatch({
        type: "UPDATE_BOARD",
        payload: board,
      });
    },
    updateTasks: (tasks, id) => {
      dispatch({
        type: "UPDATE_TASK",
        payload: { tasks, id },
      });
    },
  };

  return (
    <ScrumboardContext.Provider
      value={{
        ...state,
        ...dispatcher,
      }}
    >
      {children}
    </ScrumboardContext.Provider>
  );
};
