import {useAuth0} from "@auth0/auth0-react";
import React, {useEffect, useState} from "react";
import {useTheme} from "@mui/material/styles";
import {
    Box
} from "@mui/material";
import {Outlet, useParams} from "react-router-dom";
import {getAllVideoByUserID} from "../../api/videos";
import {USER_ROLE} from "../../utils/constants";
import DashboardSidebar from "../../components/dashboard/DashbordSidebar";


function DashboardLayout() {
    const theme = useTheme();
    const {role, page} = useParams();
    const { user } = useAuth0();
    const userId = user && user.sub;
    const [userVideos, setUserVideos] = useState(null);
    const [isLoadingUserVideos, setIsLoadingUserVideos] = useState(false);

    const getUpdatedUsersVideos = () => {
        setIsLoadingUserVideos(true);
        getAllVideoByUserID(userId).then(({videos}) => {
            let videosObj = {};
            if(videos && videos.length > 0) {
                videosObj = videos.reduce((acc, video) => {
                    if (!acc[video.State]) {
                        acc[video.State] = [];
                    }
                    acc[video.State].push(video);
                    return acc;
                }, {});
            }
            setUserVideos(videosObj);
        }).catch(error => console.log(error)).finally(() => setIsLoadingUserVideos(false));
    }


    useEffect(() => {
        if ( userId && role && role === USER_ROLE.USER) {
            getUpdatedUsersVideos();
        }
    }, [userId, role]);

    return (
        <>
            <Box sx={{display: "flex", flexGrow: 1, zIndex: 0, width: "100%", backgroundColor: "#121212"}}>
                <DashboardSidebar/>
                <Box
                    component="div"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        backgroundColor: theme.palette.background.default,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Outlet context={{userVideos: userVideos && userVideos?.[page]?.length > 0 ? userVideos[page] : null, isLoadingUserVideos, getUpdatedUsersVideos}}/>
                </Box>
            </Box>
        </>
    );

}

export default DashboardLayout;
