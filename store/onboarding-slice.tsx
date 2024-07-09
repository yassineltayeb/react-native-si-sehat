import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    changeIndex(state, action: PayloadAction<number>) {
      state = action.payload;
      return state;
    },
    nextIndex(state) {
      if (state < 2) {
        return state + 1;
      }

      return state;
    },
    previousIndex(state) {
      if (state > 0) {
        return state - 1;
      }

      return state;
    },
  },
});

export const { changeIndex, nextIndex, previousIndex } =
  onboardingSlice.actions;
export default onboardingSlice.reducer;
