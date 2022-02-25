import SearchField from "./components/SearchField";
import "./App.css";
import CardList from "./components/CardList";
import { useState } from "react";
import { Todo } from "./model/dataList";

function App() {
  const [textField, setTextField] = useState<Todo[]>([]);

  const onData = (data: string) => {
    const todList = {
      id: Math.random().toString(),
      text: data,
      modifText: false,
    };
    setTextField((e) => [...e, todList]);
  };

  const onDeleteListHandler = (id: string) => {
    const newData = textField.filter((item) => item.id !== id);
    setTextField(newData);
  };

  const onModifyListHandler = (id: string) => {
    const newList = textField.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          modifText: !item.modifText,
        };

        return updatedItem;
      }
      return item;
    });
    setTextField(newList);
  };

  const onModifyTextFieldHandler = (id: string, text: string) => {
    const newList = textField.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          text: text,
        };

        return updatedItem;
      }
      return item;
    });
    setTextField(newList);
  };

  return (
    <div>
      <SearchField propData={onData} />
      <CardList
        onModifyList={onModifyListHandler}
        onDeleteList={onDeleteListHandler}
        textFieldProp={textField}
        onModifyTextField={onModifyTextFieldHandler}
      />
    </div>
  );
}

export default App;
