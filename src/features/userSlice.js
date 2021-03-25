import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: { loginResponse: null, dbResponse: null },
  reducers: {
    assignLoginReponse(state, action) {
      state.loginResponse = action.payload;
    },
    assignDbResponse(state, action) {
      state.dbResponse = action.payload;
    },
  },
});

export const { assignLoginReponse, assignDbResponse } = userSlice.actions;
export default userSlice.reducer;
