import type { TODO, TODOSTATE } from '@/types/todo.typs';
import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

const initialState : TODOSTATE = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TODO>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    }
});

export const {
    addTodo,
    removeTodo,
    toggleTodo  
} = todoSlice.actions;

export default todoSlice.reducer;