import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const TOKEN = "token";

export const me = createAsyncThunk("auth/me", async () => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if (token) {
      const res = await axios.get("/auth/me", {
        headers: {
          authorization: token,
        },
      });
      return res.data;
    }else{
        return {}
    }
  } catch (err) {
    if (err.response.data) {
      return thunkApi.rejectWithValue(err.response.data);
    } else {
      return "There was an issue with your request";
    }
  }
});

export const signUp = createAsyncThunk(
  "auth/signup",
  async ({ username, password, email }, thunkAPI) => {
    try {
      const res = await axios.post("/auth/signup", {
        username,
        password,
        email,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      thunkAPI.dispatch(me());
    } catch (err) {
      if (err.response.data) {
        return thunkAPI.rejectWithValue(err.response.data);
      } else {
        return "There was an issue with your request";
      }
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      console.log(res);
      console.log("Logged In")
      thunkAPI.dispatch(me());
    } catch (err) {
      if (err.response.data) {
        return thunkAPI.rejectWithValue(err.response.data);
      } else {
        return "There was an issue with your request";
      }
    }
  }
);

const initialState = {
  me: {},
  error: null,
  loading: false,
  failed: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state, action) {
      window.localStorage.removeItem(TOKEN);
      state.me = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(me.fulfilled, (state, action) => {
      state.me = action.payload;
      state.loading = false;
    });
    builder.addCase(me.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(me.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
