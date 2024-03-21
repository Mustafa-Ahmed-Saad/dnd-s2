import { Droppable } from "react-beautiful-dnd";
import { Container, ItemList, Title } from "./DragDropDivStyled";
import Item from "../Item/Item";

export default function DragDropDiv({ items }) {
  return (
    <Container>
      <Title>My List</Title>
      <Droppable droppableId="0">
        {(provided, snapShot) => (
          <ItemList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapShot.isDraggingOver}
          >
            {items.map((item, index) => (
              <Item key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </ItemList>
        )}
      </Droppable>
    </Container>
  );
}
