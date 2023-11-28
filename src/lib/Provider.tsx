"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegestry";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";


const RootProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init({ duration: 6000 });
    }
  }, []);
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};

export default RootProvider;