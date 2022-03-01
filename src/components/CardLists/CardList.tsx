import { DraggableProvided, Draggable } from "react-beautiful-dnd";

import List from "../List/List";
interface TodoListProps {
  textFieldProp: {
    id: string;
    text: string;
    modifText: boolean;
    lineThrough: boolean;
  }[];
  setTextField: React.Dispatch<React.SetStateAction<any>>;
}

const CardList = (props: TodoListProps) => {
  const onClickInputHandler = (id: string) => {
    const newList = props.textFieldProp.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          modifText: !item.modifText,
        };
        return updatedItem;
      }
      return item;
    });
    props.setTextField(newList);
  };

  const onBlurModifyHandler = (id: string) => {
    const newList = props.textFieldProp.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          modifText: !item.modifText,
        };

        return updatedItem;
      }
      return item;
    });
    props.setTextField(newList);
  };

  const onModifyTextFieldHandler = (id: string, text: string) => {
    const newList = props.textFieldProp.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          text: text,
        };

        return updatedItem;
      }
      return item;
    });
    props.setTextField(newList);
  };

  const onLineThroughHandler = (id: string) => {
    const newList = props.textFieldProp.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          lineThrough: !item.lineThrough,
        };

        return updatedItem;
      }
      return item;
    });
    props.setTextField(newList);
  };
  const onDeleteListHandler = (id: string) => {
    const newData = props.textFieldProp.filter((item) => item.id !== id);
    props.setTextField(newData);
  };

  return (
    <section>
      <List name="available">
        {props.textFieldProp.map((item, index) => {
          return (
            <Draggable key={item?.id} draggableId={item?.id + ""} index={index}>
              {(provided: DraggableProvided | any) => (
                <div>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div
                      key={item?.id}
                      className="bg-[#e7efff] h-20 m-5 rounded-full flex p-2 items-center shadow-xl max-w-xl mx-auto hover:scale-105 transform duration-500 ease-out cursor-pointer"
                    >
                      {!item?.modifText && (
                        <h1
                          className={`flex-grow p-2 ml-2 font-bold text-xl ${
                            item?.lineThrough ? "line-through" : ""
                          }`}
                        >
                          {item?.text}
                        </h1>
                      )}
                      {item?.modifText && (
                        <input
                          value={item?.text}
                          type="text"
                          onChange={(e) =>
                            onModifyTextFieldHandler(item?.id, e.target.value)
                          }
                          className="h-10 rounded-full flex-grow p-3 focus:outline-none shadow-lg"
                          onBlur={() => onBlurModifyHandler(item?.id)}
                        />
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer m-1"
                        onClick={() => onLineThroughHandler(item?.id)}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer m-1"
                        onClick={() => onDeleteListHandler(item?.id)}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer m-1"
                        fill="none"
                        onClick={() => {
                          onClickInputHandler(item?.id);
                        }}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </Draggable>
          );
        })}
      </List>
      {/* <List title="To" onDragEnd={onDragEnd} name="assigned">
        {items.assigned.map((item, index) => (
          <Draggable draggableId={item?.id + "12"} index={index} key={item?.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Card data={item} />
              </div>
            )}
          </Draggable>
        ))}
      </List> */}
    </section>
  );
};

export default CardList;
