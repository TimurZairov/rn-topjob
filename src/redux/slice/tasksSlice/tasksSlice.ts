import {createSlice} from '@reduxjs/toolkit';
import {getTasks} from '../../actions/taskAction';
import {Task} from '../../../types/type';

interface IInitialState {
  tasks: Task[];
  loading: boolean;
  error: string | unknown;
}

const initialState: IInitialState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //get tasks
    builder.addCase(getTasks.pending, state => {
      state.loading = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

const {} = tasksSlice.actions;

export default tasksSlice.reducer;
