import * as React from "react";
import { Wrapper } from "./styles";

interface Props {
  name: string;
  id: number;
  done: boolean;
}

const TodoItem = ({ name, id, done }: Props) => {
  const handleChange = () => {};
  return (
    <Wrapper>
      <input
        checked={done}
        onChange={handleChange}
        type="checkbox"
        name=""
        id=""
      />
      <p className={done ? "done" : ""}>{name}</p>
    </Wrapper>
  );
};

export default TodoItem;
