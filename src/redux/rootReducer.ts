import { baseApi } from "./baseApi";
import authSlice from "./slices/authSlice";

export const reducer = {
  auth: authSlice,
  [baseApi.reducerPath]: baseApi.reducer,
};
