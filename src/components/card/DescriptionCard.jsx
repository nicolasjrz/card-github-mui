import { Stack, Typography } from "@mui/material";
import React from "react";
import { PaperInformation } from "./PaperInformation";
import { LocationInformation } from "./LocationInformation";

export const DescriptionCard = () => {
  return (
    <>
      <Stack sx={{ justifyContent: "center" }}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor
          nihil ratione odit, consequuntur possimus ipsam alias at quis quas
          libero optio ipsa illum! Atque voluptatibus nemo in itaque eum.
        </Typography>

        <PaperInformation />
        <LocationInformation />
      </Stack>
    </>
  );
};
