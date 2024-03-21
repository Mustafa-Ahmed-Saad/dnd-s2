import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const ItemList = styled.div`
  padding: 8px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "#f2f2f2" : "#fff"};
`;

export { Container, Title, ItemList };
