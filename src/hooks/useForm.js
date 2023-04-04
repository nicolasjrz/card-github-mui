import { useState } from "react";

export const useForm = () => {
  const [input, setInput] = useState({ name: "" });

  const onChangeInput = (event) => {
    setInput({ name: event.target.value });
  };

  const reset = () => {
    setInput({ name: "" });
  };

  return { input, onChangeInput, reset };
};
