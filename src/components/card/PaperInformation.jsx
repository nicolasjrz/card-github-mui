import { Paper, Stack } from "@mui/material";
import { PaperItem } from "./PaperItem";

export const PaperInformation = ({ repositories, followers, following }) => {
  return (
    <>
      <Paper elevation={3} sx={{ marginTop: "10px" }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: {
              md: "row",
            },
            justifyContent: {
              xs: "space-evenly",
            },
          }}
        >
          <PaperItem title="public repositories" data={repositories} />
          <PaperItem title="followers" data={followers} />
          <PaperItem title="following" data={following} />
        </Stack>
      </Paper>
    </>
  );
};
