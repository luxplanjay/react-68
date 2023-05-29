import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchtasksFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addTaskFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const deleteTaskFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};

const toggleCompletedFulFilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, pendingReducer)
      .addCase(fetchTasks.fulfilled, fetchtasksFulfilledReducer)
      .addCase(fetchTasks.rejected, rejectedReducer)
      .addCase(addTask.pending, pendingReducer)
      .addCase(addTask.fulfilled, addTaskFulfilledReducer)
      .addCase(addTask.rejected, rejectedReducer)
      .addCase(deleteTask.pending, pendingReducer)
      .addCase(deleteTask.fulfilled, deleteTaskFulfilledReducer)
      .addCase(deleteTask.rejected, rejectedReducer)
      .addCase(toggleCompleted.pending, pendingReducer)
      .addCase(toggleCompleted.fulfilled, toggleCompletedFulFilledReducer)
      .addCase(toggleCompleted.rejected, rejectedReducer),
});

export const tasksReducer = tasksSlice.reducer;
