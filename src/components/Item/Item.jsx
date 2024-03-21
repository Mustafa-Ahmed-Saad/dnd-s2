import { Draggable } from "react-beautiful-dnd";
import { Container } from "./ItemStyled";

// snapShot is will be like this {isDragging:false, draggingOver: "column-1" || null}

export default function Item({ item, index }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapShot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapShot.isDragging}
        >
          {item.content}
        </Container>
      )}
    </Draggable>
  );
}
