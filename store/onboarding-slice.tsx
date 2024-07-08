import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    changeIndex(state, action: PayloadAction<number>) {
      state = action.payload ?? initialState;
      return state;
    },
  },
});

export const { changeIndex } = onboardingSlice.actions;
export default onboardingSlice.reducer;
