import { Alert, IconButton, Snackbar, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "../hooks/useForm";
import { useEffect, useState } from "react";

export const Search = ({ changeName, isUser }) => {
  const { input, onChangeInput, reset } = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.name.length <= 0) return;
    changeName(input.name);
    reset();
  };

  const vertical = "top";
  const horizontal = "center";

  const [toggle, setToggle] = useState(false);

  const onCheckUser = () => {
    setToggle(isUser);
    if (toggle) return;
    setTimeout(() => {
      setToggle(toggle);
    }, 3000);
  };

  useEffect(() => {
    onCheckUser();
  }, [isUser]);

  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          marginTop: "20px",
          width: "80%",
          marginLeft: "20px",
        }}
      >
        <TextField
          value={input.name}
          onChange={onChangeInput}
          id="search"
          label="GitHub User"
          variant="outlined"
          placeholder="Buscar usuario GitHub"
          size="small"
          sx={{
            width: "100%",
          }}
        />
        <IconButton
          onClick={onSubmit}
          size="small"
          sx={{
            left: "-45px",
          }}
        >
          <SearchIcon />
        </IconButton>
      </Stack>

      <Snackbar
        open={toggle}
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        onClick={onCheckUser}
      >
        <Alert onClose={onCheckUser} severity="error" sx={{ width: "100%" }}>
          Usuario no encontrado!
        </Alert>
      </Snackbar>
    </>
  );
};
