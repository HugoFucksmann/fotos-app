import {createSlice} from '@reduxjs/toolkit';

const toolTipSlice = createSlice({
  name: 'toolTip',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    removeMessage: state => {
      state.messages.shift();
    },
  },
});

export const {addMessage, removeMessage} = toolTipSlice.actions;
export default toolTipSlice.reducer;
