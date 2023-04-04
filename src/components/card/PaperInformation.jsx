import { Paper, Stack, Typography } from "@mui/material";

export const PaperInformation = ({ repositories, followers, following }) => {
  return (
    <>
      <Paper elevation={3} sx={{ marginTop: "15px" }}>
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-evenly", margin: "20px" }}
        >
          <Stack>
            <Typography variant="h5">public repositories</Typography>
            <Typography variant="h6">{repositories}</Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">followers</Typography>
            <Typography variant="h6">{followers}</Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">following</Typography>
            <Typography variant="h6">{following}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};
