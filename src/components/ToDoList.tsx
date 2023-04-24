import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

// toDos가 IToDo 객체로 이뤄진 배열임을 알려줘야한다
const toDoState = atom<IToDo[]>({
  key: "atomToDo",
  default: [],
});

interface IFormData {
  textToDo: string;
}

interface IToDo {
  id: number;
  text: string;
  category: "할일" | "하고있는일" | "한일" /* 3가지중 하나의 스트링만 */;
}

function ToDoList() {

  // useRecoilState , useSetRecoilState 두개 합친거 : 첫번째는 value를 설정 , 두번째는 value 수정
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const onValid = (toDoData: IFormData) => {

    // setToDos(수정하는 함수): 두개의 함수 동작 가능 , 함수의 리턴값이 새로운 state가 된다 > 현재 state에 쉽게 접근 가능
    // oldToDos의 모든 요소를 가진다
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDoData.textToDo, category: "할일" },
      ...oldToDos,
    ]);
    setValue("textToDo", "");
  };
  console.log(toDos);
  return (
    <div>
      <h1>오늘의 할일</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("textToDo", {
            required: true,
          })}
          placeholder="작성하기"
        />
        <button>add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
