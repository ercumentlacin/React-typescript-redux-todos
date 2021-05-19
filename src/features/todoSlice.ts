import { createSlice } from "@reduxjs/toolkit";

interface Payload {
  item: string;
  done: boolean;
  id: number;
}

const initialState: { todoList: Payload[] } = {
  todoList: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (
      state = initialState,
      action: { type: string; payload: Payload }
    ) => {
      state.todoList.push(action.payload);
    },
    setCheck: (
      state = initialState,
      action: { type: string; payload: number }
    ) => {
      state.todoList.map((item: Payload): boolean => {
        if (action.payload === item.id) {
          if (item.done) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
        return item.done;
      });
    }
  }
});

export const { saveTodo, setCheck } = todoSlice.actions;

export const selectTodoList: any = (state: any) => state.todos.todoList;

export default todoSlice.reducer;
