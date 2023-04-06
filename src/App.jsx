import { Container } from "@mui/material";
import { Search } from "./components/Search";
import { Card } from "./components/card/Card";
import { useFetchApi } from "./hooks/useFetchApi";

function App() {
  const { data, isLoading, isUser, changeName } = useFetchApi();

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "90vw",
        height: "auto",
        borderRadius: "16px",
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Search changeName={changeName} isUser={isUser} />
      {isLoading == false ? <Card data={data} /> : "loading"}
    </Container>
  );
}

export default App;
