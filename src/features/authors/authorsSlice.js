import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addAuthor = createAsyncThunk(
  "students/add",
  async ({ username, email, password }) => {
    try {
      const { data } = await axios.post("/api/authors", {
        username,
        email,
        password,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState = {
  authors: [],
};

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addAuthor.fulfilled, (state, action) => {
      state.authors.push(action.payload);
    });
  },
});

export default authorsSlice.reducer;
