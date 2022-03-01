import SearchField from "./components/SearchField/SearchField";
import "./App.css";
import CardList from "./components/CardLists/CardList";
import { useState } from "react";
import { Todo } from "./model/dataList";
import { DragDropContext } from "react-beautiful-dnd";
import CardList2 from "./components/CardLists/CardList2";
import CardActiveTasks from "./components/CardActiveTasks/CardActiveTasks";
import CardCompletedTasks from "./components/CardCompletedTasks/CardCompletedTasks";
import CardMain from "./components/CardMain/CardMain";

function App() {
  const [textField, setTextField] = useState<Todo[]>([]);
  const [textField2, settextField2] = useState<Todo[]>([]);

  const onData = (data: string) => {
    const todList = {
      id: Math.random().toString(),
      text: data,
      modifText: false,
      lineThrough: false,
    };
    setTextField((e) => [...e, todList]);
  };
  const removeFromList = (list: any, index: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list: any, index: any, element: any) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };
  const onDragEndHandler = (result: any) => {
    if (!result.destination) {
      return;
    }
    let newState = {
      available: textField,
      assigned: textField2,
    };

    const listCopy: any = { ...newState };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];

    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    setTextField(listCopy.available);
    settextField2(listCopy.assigned);
  };

  return (
    <>
      <SearchField propData={onData} />
      <DragDropContext onDragEnd={onDragEndHandler}>
        <CardMain>
          <CardActiveTasks>
            <CardList textFieldProp={textField} setTextField={setTextField} />
          </CardActiveTasks>
          <CardCompletedTasks>
            <CardList2 textField2={textField2} setTextField2={settextField2} />
          </CardCompletedTasks>
        </CardMain>
      </DragDropContext>
    </>
  );
}

export default App;
