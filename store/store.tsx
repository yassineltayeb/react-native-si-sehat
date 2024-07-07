import { configureStore } from "@reduxjs/toolkit";
import onboardingSlice from "./onboarding-slice";

export const store = configureStore({
  reducer: {
    onboarding: onboardingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
