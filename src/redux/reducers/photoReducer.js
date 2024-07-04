import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: [],
};

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.photos.push({ id: state.photos.length + 1, ...action.payload });
    },
    loadPhotos: (state) => {
      return state;
    },
  },
});

export const { addPhoto, loadPhotos } = photoSlice.actions;

export default photoSlice.reducer;
