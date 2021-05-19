import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

import InputComp from "./components/InputComp";
import TodoItem from "./components/TodoItem";
import { Container, TodoContainer } from "./styles";

export default function App() {
  const todoList: Array<any> = useSelector(selectTodoList);

  return (
    <div className="app">
      <Container>
        <TodoContainer>
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              name={item.item}
              done={item.done}
            />
          ))}
        </TodoContainer>
        <InputComp />
      </Container>
    </div>
  );
}
