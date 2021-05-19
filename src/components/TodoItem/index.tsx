import * as React from "react";
import { useDispatch } from "react-redux";
import { setCheck } from "../../features/todoSlice";

import { Wrapper } from "./styles";

interface Props {
  name: string;
  id: number;
  done: boolean;
}

const TodoItem = ({ name, id, done }: Props) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  return (
    <Wrapper>
      <input
        checked={done}
        onChange={handleCheck}
        type="checkbox"
        name=""
        id=""
      />
      <p className={done ? "done" : ""}>{name}</p>
    </Wrapper>
  );
};

export default TodoItem;
