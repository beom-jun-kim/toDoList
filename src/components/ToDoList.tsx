import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { toDoSelector, categoryState, Categories } from "../components/atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "../components/ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  // useRecoilState : 1.현재의 값과 , 2.수정하는 값
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>투두리스트</h1>
      <select value={category} onInput={onInput}>
        <option value={Categories.할일}>할일</option>
        <option value={Categories.하고있는일}>하고있는일</option>
        <option value={Categories.한일}>한일</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
