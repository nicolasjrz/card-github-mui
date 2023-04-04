export const useForm = () => {
  const [input, setInput] = useState({ name: "" });

  const onChangeInput = (event) => {
    setInput({ name: event.target.value });
  };

  const onSubmitTest = (name) => {
    console.log(name);
    setInput({ name: name });
  };

  const reset = () => {
    setInput({ name: "" });
  };

  return { input, onChangeInput, onSubmitTest, reset };
};
