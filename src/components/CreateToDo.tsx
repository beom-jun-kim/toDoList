import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../components/atoms";

interface IFormData {
  textToDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
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
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("textToDo", {
          required: true,
        })}
        placeholder="작성하기"
      />
      <button>add</button>
    </form>
  );
}

export default CreateToDo;
