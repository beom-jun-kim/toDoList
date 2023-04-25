import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  category: "할일" | "하고있는일" | "한일" /* 3가지중 하나의 스트링만 */;
}

// toDos가 IToDo 객체로 이뤄진 배열임을 알려줘야한다
export const toDoState = atom<IToDo[]>({
  key: "atomToDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",

  // get function : 인자로 객체를 받는다
  // selector의 내부로 atom을 가지고 올 수 있다
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "할일"),
      toDos.filter((toDo) => toDo.category === "한일"),
      toDos.filter((toDo) => toDo.category === "하고있는일"),
    ];
  },
});
