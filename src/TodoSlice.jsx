import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  task: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.task = state.task.filter((key) => key.id !== action.payload.id);
    },
    CompleteTask: (state, action) => {
      const task = state.task.find(task => task.id === action.payload.id);
      if (task) {
        task.status = false;
      }
    },
    ReopenTask: (state, action) => {
      const task = state.task.find(task => task.id === action.payload.id);
      if (task) {
        task.status = true;
      }
    },
    editTask: (state, action) => {
      const task = state.task.find(task => task.id === action.payload.id);
      if (task) {
        task.work = action.payload.work;
      }
    }
  }
});

export const { addTask, deleteTask, CompleteTask, ReopenTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
