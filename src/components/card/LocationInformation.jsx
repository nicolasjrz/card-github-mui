import {
  Business,
  LanguageOutlined,
  LocationOnOutlined,
  Twitter,
} from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

export const LocationInformation = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
      <Grid item xs={6}>
        <Stack direction={"row"} spacing={2} sx={{ paddingBottom: "15px" }}>
          <LocationOnOutlined />
          <Typography>location</Typography>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <Business />
          <Typography>company</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction={"row"} spacing={2} sx={{ paddingBottom: "15px" }}>
          <Twitter />
          <Typography>twitter_username</Typography>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <LanguageOutlined />
          <Typography>html_url</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
