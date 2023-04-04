import { Container } from "@mui/material";
import { Search } from "./components/Search";
import { Card } from "./components/card/Card";

function App() {
  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Search />
      <Card />
    </Container>
  );
}

export default App;
