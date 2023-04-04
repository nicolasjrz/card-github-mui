import { InformationCard } from "./InformationCard";
import { DescriptionCard } from "./DescriptionCard";
import { CardMedia, Grid, Stack } from "@mui/material";

export const Card = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: 5 }}>
      <Grid item xs={3}>
        <CardMedia
          component={"img"}
          image={"https://avatars.githubusercontent.com/u/61887365?v=4"}
          alt="avatar"
          sx={{ borderRadius: "50%", marginLeft: "10px" }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction={"column"}
          spacing={1}
          sx={{
            margin: "20px",
          }}
        >
          <InformationCard />
          <DescriptionCard />
        </Stack>
      </Grid>
    </Grid>
  );
};
