import { useRecoilValue } from "recoil";
import { toDoState } from "../components/atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // useRecoilState : useRecoilValue , useSetRecoilState 두개 합친거
  // 첫번째는 value를 설정 , 두번째는 value 수정
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>오늘의 할일</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id}{...toDo}/>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
