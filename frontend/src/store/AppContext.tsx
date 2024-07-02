import React, { useState, useEffect } from "react";
//import ApiArray interface for apiValue
import { ApiArray } from "./Context";
//importing context
import { CONTEXT_VALUE } from "./Context";
import axios from "axios";

function AppContext({ children }: { children: React.ReactNode }) {
  //apiValue = response from backend api
  const [post, setPost] = useState<ApiArray>([]);

  //used to render loader
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //isSubmitted is used to re-render useEffect [isSubmitted]
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  //used to determine whether to update or not
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  //id
  const [id, setId] = useState<number>(3);

  //used to reset isSubmitted
  const reSet = () => {
    setIsSubmitted(false);
  };

  //GET REQUEST
  const fetchData = async () => {
    // const res = await axios({
    //   method: "get",
    //   url: "https://www.markdowneditor1.onrender.com/api/v1/markdown",
    //   withCredentials: true,
    // });
    //const res = await axios.get("http://localhost:3000/api/v1/markdown");
    const res = await axios.get(
      "https://markdowneditor1.onrender.com/api/v1/markdown"
    );
    try {
      setIsLoading(false);
      setPost(res.data.response);
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
        post,
        setPost,
        isSubmitted,
        setIsSubmitted,
        reSet,
        setIsLoading,
        isLoading,
        isUpdate,
        setIsUpdate,
        id,
        setId,
      }}
    >
      {children}
    </CONTEXT_VALUE.Provider>
  );
}

export default AppContext;
