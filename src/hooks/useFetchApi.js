import React, { useEffect, useState } from "react";

export const useFetchApi = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
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
      });
    } catch (error) {
      setState({
        ...state,
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
    hasError: state.hasError,
    changeName,
  };
};
