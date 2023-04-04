import { InformationCard } from "./InformationCard";
import { DescriptionCard } from "./DescriptionCard";
import { CardMedia, Grid, Stack } from "@mui/material";

export const Card = ({ data }) => {
  const { avatar_url } = data;

  return (
    <Grid container spacing={2} sx={{ marginTop: 5 }}>
      <Grid item xs={3}>
        <CardMedia
          component={"img"}
          image={avatar_url}
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
          <InformationCard data={data} />
          <DescriptionCard data={data} />
        </Stack>
      </Grid>
    </Grid>
  );
};
