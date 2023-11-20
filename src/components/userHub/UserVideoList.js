import React, { Grid } from '@mui/material'
import UserVideo from "../../components/userHub/UserVideo";
import {USER_HUB_PAGES} from "../../utils/constants";

const UserVideoList = ({videoList, template = USER_HUB_PAGES.HOME_PAGE}) =>  {

    const isHomePage = template ===  USER_HUB_PAGES.HOME_PAGE;
    //const isAdminPage = template ===  USER_HUB_PAGES.ADMIN_PAGE;
    // const isUserPage = template ===  USER_HUB_PAGES.USER_PAGE;

    return (
        <Grid container spacing={3}  alignItems="stretch">
            {videoList.map(video => (
                <Grid item xs={12} md={isHomePage ? 6 : 12} lg={isHomePage ? 4 : 12}>
                    <UserVideo maxWidth={isHomePage ? "100%" : "600px"} video={video} withVideoInfo={isHomePage}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default UserVideoList;
