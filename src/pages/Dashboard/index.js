import React, { useState, useEffect, useContext } from "react";
import {
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
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
  const { page } = useParams();
  const { userRole } = useContext(MyContext);

  useEffect(() => {
    const fetchDataAdmin = async () => {
      if (userRole !== "Admin") {
        return;
      }
      try {
        const videosData = await getAllVideosByState(page);

        setVideoList(videosData.videos);
      } catch (error) {
        console.error({ error });
      }
    };
    fetchDataAdmin();
  }, [isLoading, page, userRole]);
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
  }, [isLoading, userRole, page]);

  return (
    <>
      {page === "allUsers" ? (
          <AllUsersPage state={page} />
      ) : !isLoading && !userRole  ? (
          <CircularProgress />
      ) : (
          <VideosPage
              state={page}
              data={videoList.filter((video) => video.State === page)}
          />
      )}
    </>
  );
}
export default DashboardPage;
