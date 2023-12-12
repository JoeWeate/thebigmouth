import {CircularProgress, Grid} from "@mui/material";
import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import DashboardVideo from "../../../components/dashboard/DashboardVideo";
import VideoActionsAdmin from "../../../components/dashboard/VideoActionsAdmin";
import VideoAdminInfo from "../../../components/dashboard/VideoAdminInfo";
import Divider from "../../../components/Divider";
import EmptyState from "../../../components/EmptyState";

import {
    getAllVideosByState,
} from "../../../api/videos";


function AdminVideoPage() {
    const { page, role } = useParams();
    const [videos, setVideos] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getUpdatedAdminVideos = () => {
        setIsLoading(true);
        getAllVideosByState(page).then(({videos}) => {
            setVideos(videos);
        }).catch(error => console.log(error)).finally(()=> setIsLoading(false));
    }

    useEffect(() => {
        getUpdatedAdminVideos();
    }, [page]);

    return (
        <>
            {isLoading && <CircularProgress/>}
            {!isLoading && ((videos && videos.length === 0) || videos === null)&& <EmptyState>There is no any {page} videos</EmptyState>}
            {!isLoading && videos && videos.length > 0 && videos.map ((video) => (
                <div key={video.VideoID}>
                    <Grid container flexWrap="wrap" sx={{
                        direction: {lg: "row", xs: "column"},
                        justifyContent: {xs: "center", lg: "flex-start"},
                        mb: {xs: "1rem", lg: 0}
                    }}>
                        <Grid item lg={4} xs={11} p="1rem" style={{position: "relative"}}>
                            <div style={{position: "relative"}}>
                                <DashboardVideo key={video.VideoID} video={video} page={page}/>
                            </div>
                        </Grid>
                        <Grid item lg={6} xs={11} p="1rem" sx={{marginTop: {lg: 0, xs: "-1.5rem"}}}>
                            <VideoAdminInfo userRole={role} videoInfo={video}>
                                <VideoActionsAdmin page={page} video={video} userRole={role} getUpdatedVideos={getUpdatedAdminVideos}/>
                            </VideoAdminInfo>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: "1rem" }} />
                </div>
            ))}
        </>
    );
}
export default AdminVideoPage;
