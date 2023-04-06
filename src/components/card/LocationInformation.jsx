import {
  Business,
  LanguageOutlined,
  LocationOnOutlined,
  Twitter,
} from "@mui/icons-material";
import { Grid, Link, Typography } from "@mui/material";

export const LocationInformation = ({ location, company, twitter, url }) => {
  return (
    <>
      <Grid
        container
        sx={{
          marginTop: "10px",
        }}
        padding={1}
      >
        <Grid
          item
          md={6}
          xs={12}
          display={"flex"}
          mt={2}
          sx={{ display: "flex" }}
        >
          <LocationOnOutlined />
          <Typography ml={1}>{location}</Typography>
        </Grid>
        <Grid item md={6} xs={12} display={"flex"} mt={2}>
          <Business />
          <Typography ml={1}>{company}</Typography>
        </Grid>
        <Grid item md={6} xs={12} display={"flex"} mt={2}>
          <Twitter />
          <Typography ml={1}>{twitter}</Typography>
        </Grid>
        <Grid item md={6} xs={12} display={"flex"} mt={2}>
          <LanguageOutlined />

          <Link ml={1} href={url} underline="hover" pt={0.5}>
            {url}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
