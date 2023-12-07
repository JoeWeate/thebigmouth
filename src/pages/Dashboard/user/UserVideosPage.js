import {CircularProgress, Grid} from "@mui/material";
import React from "react";
import {useOutletContext, useParams} from "react-router-dom";
import DashboardVideo from "../../../components/dashboard/DashboardVideo";
import VideoActionsUser from "../../../components/dashboard/VideoActionUser";
import VideoUserInfo from "../../../components/dashboard/VideoUserInfo";
import Divider from "../../../components/Divider";
import EmptyState from "../../../components/EmptyState";
import {VIDEO_STATE} from "../../../utils/constants";


function UserVideosPage() {
    const {isLoadingUserVideos:isLoading, userVideos:videos, getUpdatedUsersVideos} = useOutletContext()
    const { page, role } = useParams();


    return (
        <>
            {isLoading && <CircularProgress/>}
            {!isLoading && videos === null && <EmptyState>There is no any {page} videos</EmptyState>}
            {!isLoading && videos && videos.length > 0 && videos.filter(video => video.State === page).map((video, index, arr) => (
                <div key={video.VideoID}>
                    <Grid container flexWrap="wrap" sx={{
                        direction: {lg: "row", xs: "column"},
                        justifyContent: {xs: "center", lg: "flex-start"},
                        mb: {xs: "1rem", lg: 0}
                    }}>
                        <Grid item lg={4} xs={11} p="1rem" style={{position: "relative"}}>
                            <div style={{position: "relative"}}>
                                <DashboardVideo key={video.VideoID} video={video} page={page}
                                                withTopCover={page === VIDEO_STATE.BLOCKED || page === VIDEO_STATE.IN_REVIEW}/>
                            </div>
                        </Grid>
                        <Grid item lg={6} xs={11} p="1rem" sx={{marginTop: {lg: 0, xs: "-1.5rem"}}}>
                            <VideoUserInfo userRole={role} videoInfo={video}>
                                <VideoActionsUser page={page} video={video} userRole={role} getUpdatedUsersVideos={getUpdatedUsersVideos}/>
                            </VideoUserInfo>
                        </Grid>
                    </Grid>
                    {!!index && (index < arr.length) && <Divider sx={{ my: "1rem" }} />}
                </div>
            ))}
        </>
    );
}

export default UserVideosPage;
