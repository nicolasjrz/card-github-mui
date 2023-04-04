import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "../hooks/useForm";

export const Search = ({ changeName, hasError }) => {
  const { input, onChangeInput, reset } = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.name.length <= 0) return;

    changeName(input.name);
    reset();
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        marginTop: "20px",
        width: "80%",
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
          width: "90%",
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
  );
};
