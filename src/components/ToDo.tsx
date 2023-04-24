import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../components/atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "할일" && (
        <button name="할일" onClick={onClick}>
          할일
        </button>
      )}
      {category !== "하고있는일" && (
        <button name="하고있는일" onClick={onClick}>
          하고있는일
        </button>
      )}
      {category !== "한일" && (
        <button name="한일" onClick={onClick}>
          한일
        </button>
      )}
    </li>
  );
}

export default ToDo;
