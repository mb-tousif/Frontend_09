import { RootState } from "@/redux/store";

const getAccessToken = (state: RootState) => {
  return state.auth.token;
};

export default getAccessToken;
