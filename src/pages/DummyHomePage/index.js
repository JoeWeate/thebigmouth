import React from "react";
import { Container } from "@mui/material";
import MyButton from "../../components/Button";

const DummyHomePage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "2rem",
      }}
    >
      <MyButton template="yellow" variant="contained">
        Approve
      </MyButton>
    </Container>
  );
};

export default DummyHomePage;
