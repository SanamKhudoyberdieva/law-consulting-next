import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageTypes {
  lang: string;
}

const initialState: LanguageTypes = {
  lang: "uz"
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;