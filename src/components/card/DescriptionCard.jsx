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
          {bio}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor
          nihil ratione odit, consequuntur possimus ipsam alias at quis quas
          libero optio ipsa illum! Atque voluptatibus nemo in itaque eum.
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
