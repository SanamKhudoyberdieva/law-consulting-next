import { HomeTypes } from "@/src/types/home";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: HomeTypes = {
  about_company: null,
  banners: null,
  clients: null,
  language: "",
  news: null,
  services: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHome(state, action: PayloadAction<HomeTypes>) {
      state.about_company = action.payload.about_company;
      state.banners = action.payload.banners;
      state.clients = action.payload.clients;
      state.language = action.payload.language;
      state.news = action.payload.news;
      state.services = action.payload.services;
    },
  },
});

export const { setHome } = homeSlice.actions;
export default homeSlice.reducer;