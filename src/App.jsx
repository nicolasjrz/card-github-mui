import { Container } from "@mui/material";
import { Search } from "./components/Search";
import { Card } from "./components/card/Card";
import { useFetchApi } from "./hooks/useFetchApi";

function App() {
  const { data, isLoading, hasError, changeName } = useFetchApi();

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
      <Search changeName={changeName} hasError={hasError} />
      {isLoading == false ? <Card data={data} /> : "loading"}
    </Container>
  );
}

export default App;
