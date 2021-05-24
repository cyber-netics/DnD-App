import React, { useContext } from "react";
import { ScrumboardProvider } from "context";
import { Container } from "Components/Styles";
import { Boards, Tasks } from "Partial";

import { DragDropContext } from "react-beautiful-dnd";
import { ScrumboardContext } from "context";

// ** Dev Dataset ** /
import * as dataset from "__Dataset";
// *** *** *** *** * /

const Application = () => {
  const { boards, tasks } = useContext(ScrumboardContext);
  const onDrag = () => {};

  return (
    <Container>
      <DragDropContext onDragEnd={onDrag}>
        <Boards boards={boards}>
          <Tasks tasks={tasks} />
        </Boards>
        <h2>hello</h2>
      </DragDropContext>
    </Container>
  );
};

const App = (props) => {
  return (
    <ScrumboardProvider initState={dataset}>
      <Container>
        <Application {...props} />
      </Container>
    </ScrumboardProvider>
  );
};

export default App;
