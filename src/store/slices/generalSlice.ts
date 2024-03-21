import { General } from "@/src/types/general";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: General = {
  footer: null,
  header: null
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setGeneral(state, action: PayloadAction<General>) {
      state.footer = action.payload.footer;
      state.header = action.payload.header;
    },
  },
});

export const { setGeneral } = generalSlice.actions;
export default generalSlice.reducer;