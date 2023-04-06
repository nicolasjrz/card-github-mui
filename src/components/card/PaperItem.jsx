import { Stack, Typography } from "@mui/material";

export const PaperItem = ({ title, data }) => {
  return (
    <Stack paddingTop={1} sx={{ textAlign: "center" }}>
      <Typography variant="overline" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="h6">{data}</Typography>
    </Stack>
  );
};
