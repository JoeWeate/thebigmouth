
import {useAuth0} from "@auth0/auth0-react";
import {CircularProgress} from "@mui/material";
import React, { useContext } from "react";
import {useParams} from "react-router-dom";

import {USER_ROLE} from "../../utils/constants";
import AdminVideosPage from "./admin/AdminVideosPage";
import UserVideosPage from "./user/UserVideosPage";
import AllUsersPage from "./admin/AllUsersPage";
import { MyContext } from "../../App";


function DashboardPage() {
  const { user, isLoading } = useAuth0();
  const { role, page } = useParams();
  const { userRole } = useContext(MyContext);

  if(isLoading && (!user || !userRole)) {
    return <CircularProgress />
  } else if((!isLoading && (!user || !userRole)) || (userRole && (userRole !== role))) {
    return <div>User is not authorized to access this resource</div>
  }

  if(user && userRole && (userRole === role)) {
    if(role === USER_ROLE.ADMIN) {
      if(page === "all-users") {
        return <AllUsersPage />
      } else {
        return <AdminVideosPage />
      }
    } else if(role === USER_ROLE.USER) {
      return <UserVideosPage userId={user.sub}/>
    }
  }
}
export default DashboardPage;
