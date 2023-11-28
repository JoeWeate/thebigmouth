import { Grid } from "@mui/material"
import UserVideo from "../../components/userHub/UserVideo"
import { userHubVideoListMocks } from "../../api/mocks"
import PageTitleComponent from "./PageTitleComponent"
import SubtitleComponent from "./SubtitleComponent"
import React from "react";
import AddArtButton from "../../components/userHub/AddArtButton";


const DummyHomePage = () => {
    let title = "Welcome to VideoHub";
    let subtitle = "Your Ultimate Destination for Awesome Content Experiences!"


    return (

        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item lg={12} sx={{ mt: { xs: "2rem", lg: "2rem" }, mb: { xs: "1rem", lg: "2rem" } }} >
                <PageTitleComponent title={title} fontSize="50pt" />
                <SubtitleComponent subtitle={subtitle} fontSize="24pt" />
            </Grid>
            <Grid item><AddArtButton /></Grid>

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
export default DummyHomePage;