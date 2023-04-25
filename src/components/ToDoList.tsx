import { useRecoilValue } from "recoil";
import { toDoState, toDoSelector } from "../components/atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // useRecoilState : useRecoilValue , useSetRecoilState 두개 합친거
  // 첫번째는 value를 설정 , 두번째는 value 수정
  const [toDo, done,doing] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>오늘의 할일</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
