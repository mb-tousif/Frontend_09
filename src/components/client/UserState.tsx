"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeToken } from "@/redux/slices/authSlice";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserState() {
  const { token } = useAppSelector((state) => state.auth);
  const [ hasToken, setHasToken ] = useState(false);
  useEffect(() => {
    if (token) {
      setHasToken(true);
    }
  }, [token, hasToken]);
  const dispatch = useAppDispatch();
  const handleAuth = () => {
    dispatch(removeToken());
  };
  return (
    <>
      {hasToken ? (
        <Link
          onClick={() => handleAuth()}
          href="/"
          className="px-3 underline-none py-2 justify-end rounded-md text-base md:text-lg font-medium"
        >
          Log out
        </Link>
      ) : (
        <Link
          href= "/login"
          className="px-3 underline-none py-2 justify-end rounded-md text-base md:text-lg font-medium"
        >
          Log in
        </Link>
      )}
    </>
  );
}
