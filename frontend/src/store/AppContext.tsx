import React, { useState, useEffect } from "react";
//import ApiArray interface for apiValue
import { ApiArray } from "./Context";
//importing context
import { CONTEXT_VALUE } from "./Context";
import axios from "axios";

function AppContext({ children }: { children: React.ReactNode }) {
  //apiValue = response from backend api
  const [apiValue, setApiValue] = useState<ApiArray>([]);

  //used to render loader
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //isSubmitted is used to re-render useEffect [isSubmitted]
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  //Used to render success alert
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  //used to render error alert
  const [isError, setIsError] = useState<boolean>(false);

  //used to specify error whether existed name error or network error
  const [nameError, setNameError] = useState<boolean>(false);

  //used to toggle alert message
  const Timeout = () => {
    setTimeout(() => {
      setIsSuccessful(false);
      setIsError(false);
    }, 3000);
  };

  //used to reset isSuccessful,isSubmitted,isError
  const reSet = () => {
    setIsSubmitted(false);
    Timeout();
  };

  //GET REQUEST
  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/v1/markdown/");
    try {
      setIsLoading(false);
      setApiValue(res.data.response);
      return res;
    } catch (err) {
      console.log(err);
    }
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
        nameError,
        setNameError,
      }}
    >
      {children}
    </CONTEXT_VALUE.Provider>
  );
}

export default AppContext;
