import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export const Search = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        marginTop: "20px",
        width: "80%",
      }}
    >
      <TextField
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
