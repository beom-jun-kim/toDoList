import { atom } from "recoil";

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

