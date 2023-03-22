import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterId: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterId(state, action) {
      console.log("setFilterId", action);
      state.filterId = action.payload;
    },
  },
});

export const { setFilterId } = filterSlice.actions;

export default filterSlice.reducer;
