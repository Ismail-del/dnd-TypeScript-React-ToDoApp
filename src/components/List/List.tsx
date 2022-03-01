import { Droppable, DroppableProvided } from "react-beautiful-dnd";
type ListProps = {
  children?: React.ReactNode;
  name: string;
};

const List = (props: ListProps) => {
  return (
    <Droppable droppableId={props.name}>
      {(provided: DroppableProvided) => (
        <div ref={provided.innerRef}>
          {props.children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default List;
