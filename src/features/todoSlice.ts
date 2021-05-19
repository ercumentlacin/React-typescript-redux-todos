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
    }
  }
});

export const { saveTodo } = todoSlice.actions;

export const selectTodoList: any = (state: any) => state.todos.todoList;

export default todoSlice.reducer;
