import * as React from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";
import { Wrapper } from "./styles";

const InputComp: React.FC = () => {
  const [input, setInput] = React.useState("");

  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
  };
  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now()
      })
    );
  };
  return (
    <Wrapper className="input">
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={addTodo}>Add</button>
    </Wrapper>
  );
};

export default InputComp;
