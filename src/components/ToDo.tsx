import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../components/atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      // findIndex() : 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환.
      // 만족하는 요소가 없으면 -1을 반환합니다.
      const targetIndex = oldToDos.findIndex((toDO) => toDO.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const delbtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.parentElement;
  };
  return (
    <li>
      <span>{text}</span>
      <button onClick={delbtn}>x</button>
      {category !== Categories.할일 && (
        <button name={Categories.할일} onClick={onClick}>
          할일
        </button>
      )}

      {category !== Categories.하고있는일 && (
        <button name={Categories.하고있는일} onClick={onClick}>
          하고있는일
        </button>
      )}

      {category !== Categories.한일 && (
        <button name={Categories.한일} onClick={onClick}>
          한일
        </button>
      )}
    </li>
  );
}

export default ToDo;
