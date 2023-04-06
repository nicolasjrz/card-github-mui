import React, { useEffect, useState } from "react";

export const useFetchApi = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    isUser: false,
    hasError: null,
  });

  const [name, setName] = useState("nicolas");

  const getApi = async () => {
    try {
      const url = `https://api.github.com/users/${name}`;
      const res = await fetch(url);
      if (!res?.ok) {
        throw new Error("algo salio mal", { cause: { res } });
      }
      const data = await res.json();
      setState({
        data,
        isLoading: false,
        hasError: null,
        isUser: false,
      });
    } catch (error) {
      setState({
        ...state,
        //data: { name: "nicolas" },
        isUser: true,
        hasError: error,
      });
    }
  };

  const changeName = (user) => {
    setName(user);
  };

  useEffect(() => {
    getApi();
  }, [name]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    isUser: state.isUser,
    hasError: state.hasError,
    changeName,
  };
};
