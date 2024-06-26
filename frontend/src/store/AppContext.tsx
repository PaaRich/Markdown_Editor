import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

interface Api {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: Date;
}
interface ApiArray {
  [index: number]: Api;
}

//context interface
interface MyInterface {
  apiValue: ApiArray;
  setApiValue: (value: ApiArray) => void;
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  reSet: () => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccessful: boolean;
  setIsSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CONTEXT_VALUE = createContext<MyInterface | null>(null);

function AppContext({ children }: { children: React.ReactNode }) {
  //apiValue = response from backend api
  const [apiValue, setApiValue] = useState<ApiArray>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  //used to reset the isSubmitted value

  const Timeout = () => {
    setTimeout(() => {
      setIsSuccessful(false);
    }, 3000);
  };
  const reSet = () => {
    setIsSubmitted(false);
    Timeout();
  };
  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/v1/markdown/");
    setIsLoading(false);
    setApiValue(res.data.response);
    return res;
  };
  useEffect(() => {
    fetchData();
  }, [isSubmitted]);

  return (
    <CONTEXT_VALUE.Provider
      value={{
        apiValue,
        setApiValue,
        isSubmitted,
        setIsSubmitted,
        reSet,
        setIsLoading,
        isLoading,
        isSuccessful,
        setIsSuccessful,
        isError,
        setIsError,
      }}
    >
      {children}
    </CONTEXT_VALUE.Provider>
  );
}

export default AppContext;
