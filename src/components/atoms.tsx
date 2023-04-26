import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export enum Categories {
  "할일" = "할일",
  "하고있는일" = "하고있는일",
  "한일" = "한일",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories /* 3가지중 하나의 스트링만 */;
}

// toDos가 IToDo 객체로 이뤄진 배열임을 알려줘야한다
// state
export const toDoState = atom<IToDo[]>({
  key: "atomToDo",
  default: [],
  effects_UNSTABLE:[persistAtom],
});

// 사용자가 현재 선택한 카테고리
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.할일,
});

export const toDoSelector = selector({
  key: "toDoSelector",

  // get function : 인자로 객체를 받는다
  // selector의 내부로 atom을 가지고 올 수 있다
  // state 변경
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
