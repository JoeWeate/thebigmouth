import React from "react";
import Account from "../../components/Profile";
import ProtectedRoute from "../../components/ProtectedRoute";

const Profile = () => {
   return (
        <ProtectedRoute>
            <Account />
        </ProtectedRoute>
   )
}

export default Profile;