import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aiList: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    filterList: (state, action) => {
      const itemId = action.payload;
      state.aiList = state.aiList.filter((item) => itemId.includes(item.id));
    },
    initState: (state, action) => {
      state.aiList = action.payload;
    },
  },
});
export const { filterList, initState } = cardSlice.actions;
export default cardSlice.reducer;
