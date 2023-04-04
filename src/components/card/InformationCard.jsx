import { Stack, Typography } from "@mui/material";

export const InformationCard = () => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">name</Typography>
        <Typography variant="subtitle2">created_at</Typography>
      </Stack>
      <Typography variant="caption">@login</Typography>
    </>
  );
};
