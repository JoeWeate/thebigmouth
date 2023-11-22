import { Grid, Typography } from "@mui/material"
import AddArtButton from "../../components/userHub/AddArtButton"
import UserVideo from "../../components/userHub/UserVideo"
import { userHubVideoListMocks } from "../../api/mocks"

const DummyHomePage = () => {
    return (

        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item lg={12} mb="2rem" sx={{ mt: { xs: "1rem" }, mb: { xs: "1rem", lg: "2rem" } }} >
                <Grid container direction="column" alignItems="center">
                    <Typography variant="h5" sx={{ textAlign: "center", textTransform: "uppercase", fontWeight: "600", fontSize: { lg: "50pt", sm: "40pt", xs: "20pt" } }}  >
                        <p >Welcome to <span style={{ color: "#E6007E" }}>Video</span>Hub</p>
                    </Typography>

                    <Typography variant="h4" sx={{ textAlign: "center", fontSize: { xs: "13pt", sm: "14pt", md: "24pt" }, marginTop: { lg: "-5rem", xs: "-2rem" }, marginBottom: { xs: "2rem", lg: "4rem" } }}>
                        <p>
                            Your Ultimate Destination for Awesome Content Experiences!
                        </p>

                    </Typography>

                    <AddArtButton />
                </Grid>
            </Grid>
            <Grid item sx={{ width: "90%", marginTop: "2rem", marginBottom: "2rem" }}>
                <Grid container justifyContent="center" sx={{ marginBottom: { lg: "4rem", sm: 0 } }}>
                    {userHubVideoListMocks.map((video) => {
                        let withVideoInfo = true;
                        let maxWidth = "800px";
                        return (
                            <Grid item lg={4} md={6} xs={12} key={video.id} sx={{ padding: { lg: "1rem", md: "1rem", sm: 0 }, paddingBottom: { sm: "2rem", xs: "1rem" } }}>
                                <UserVideo video={video} maxWidth={maxWidth} withVideoInfo={withVideoInfo} />
                            </Grid>
                        )
                    })}
                </Grid>

            </Grid>
        </Grid >
    )
}

export default DummyHomePage