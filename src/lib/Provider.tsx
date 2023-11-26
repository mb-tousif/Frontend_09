"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegestry";
import "aos/dist/aos.css";
import Aos from "aos";


const RootProvider = ({ children }: { children: React.ReactNode }) => {
  Aos.init();
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};

export default RootProvider;