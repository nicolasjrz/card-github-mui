import { Stack, Typography } from "@mui/material";
import { PaperInformation } from "./PaperInformation";
import { LocationInformation } from "./LocationInformation";

export const DescriptionCard = ({ data }) => {
  const {
    bio,
    public_repos,
    followers,
    following,
    location,
    company,
    twitter_username,
    html_url,
  } = data;

  return (
    <>
      <Stack sx={{ justifyContent: "center" }}>
        <Typography variant="body1">
          {bio === null
            ? "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            : bio}
        </Typography>

        <PaperInformation
          repositories={public_repos}
          followers={followers}
          following={following}
        />
        <LocationInformation
          location={location}
          company={company}
          twitter={twitter_username}
          url={html_url}
        />
      </Stack>
    </>
  );
};
