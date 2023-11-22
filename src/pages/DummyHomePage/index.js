import { Container } from "@mui/material"
import AddArtButton from "../../components/AddArtButton"

const DummyHomePage = () => {
    return (
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "2rem" }}>
            <AddArtButton />
        </Container>
    )
}

export default DummyHomePage