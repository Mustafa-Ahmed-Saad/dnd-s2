import { useState } from "react";
import "./App.css";
import initialData from "./helper/initial-data";
import { DragDropContext } from "react-beautiful-dnd";
import DragDropDiv from "./components/DragDropDiv/DragDropDiv";

function App() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // if drop outside the droppable
    if (!destination) {
      return;
    }
    // if location of droppable is not changed
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const draggableItem = data.filter((item) => item.id === draggableId)[0];
    const newData = [...data];
    newData.splice(source.index, 1);
    newData.splice(destination.index, 0, draggableItem);

    setData(newData);

    const target = newData.map((item) => ({
      id: item.id,
      order: item.order,
    }));
    console.log(target);
  };

  const items = data;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DragDropDiv items={items} />;
    </DragDropContext>
  );
}

export default App;
