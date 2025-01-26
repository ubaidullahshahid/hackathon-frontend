import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../Apis/getCurrUser";

const initialState = {
  currentUserLoading: false,
  currentUser: null,
  error: null,
};

export const fetchCurrentUser = createAsyncThunk(
  "currentUser/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    
    const token = localStorage.getItem("authToken");
    
    if (!token) return rejectWithValue("No token found");
    
    try {
      const user = await getCurrentUser(token);
      return user;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch user");
    }
  }
);

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    clearCurrentUser: (state) => {
      state.currentUser = null;
      state.currentUserLoading = false;
      state.error = null;
    },
    toggleCurrUserLoading:(state , action)=>{
      state.currentUserLoading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.currentUserLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.currentUserLoading = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.currentUser = null;
        state.currentUserLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentUser , toggleCurrUserLoading } = currentUserSlice.actions;
const currentUserReducer = currentUserSlice.reducer;
export default currentUserReducer;
