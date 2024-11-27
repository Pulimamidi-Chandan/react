import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice for the button state
const buttonSlice = createSlice({
  name: "button",
  initialState: {
    message: "Button not clicked",
  },
  reducers: {
    updateMessage(state, action) {
      state.message = action.payload;
    },
  },
});

// Export actions
export const { updateMessage } = buttonSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: {
    button: buttonSlice.reducer,
  },
});

export default store;
