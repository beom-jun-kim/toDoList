import { IToDo } from "../components/atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>할일</button>
      <button>하고있는일</button>
      <button>한일</button>
    </li>
  );
}

export default ToDo;
