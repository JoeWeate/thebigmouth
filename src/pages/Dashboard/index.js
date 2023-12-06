import React, { useState, useEffect, useContext } from "react";
import {
  CircularProgress,
} from "@mui/material";
import {useOutletContext} from "react-router-dom";
import VideosPage from "./VideosPage";
import AllUsersPage from "./AllUsersPage";
import {
  getAllVideoByUserID,
  getAllVideosByState,
} from "../../api/videos";
import { useAuth0 } from "@auth0/auth0-react";
import { MyContext } from "../../App";


function DashboardPage() {
  const { user, isLoading } = useAuth0();
  const [videoList, setVideoList] = useState([]);
  const { userRole } = useContext(MyContext);
  const {videoState, updateData, setUpdateData} = useOutletContext()

  useEffect(() => {
    const fetchDataAdmin = async () => {
      if (userRole !== "Admin") {
        return;
      }
      try {
        const videosData = await getAllVideosByState(videoState);

        setVideoList(videosData.videos);
      } catch (error) {
        console.error({ error });
      }
    };
    fetchDataAdmin();
  }, [isLoading, videoState, userRole]);
  useEffect(() => {
    const fetchDataUser = async () => {
      if (userRole !== "User" || !user) {
        return;
      }
      try {
        const videosUserData = await getAllVideoByUserID(user.sub);
        setVideoList(videosUserData.videos);
      } catch (error) {
        console.error({ error });
      }
    };
    fetchDataUser();
  }, [isLoading, userRole, updateData]);

  return (
    <>
      {videoState === "allUsers" ? (
          <AllUsersPage state={videoState} />
      ) : !isLoading && !userRole && !updateData ? (
          <CircularProgress />
      ) : (
          <VideosPage
              state={videoState}
              setUpdateData={setUpdateData}
              data={videoList.filter((video) => video.State === videoState)}
          />
      )}
    </>
  );
}
export default DashboardPage;
