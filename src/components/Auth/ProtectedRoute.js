import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"


export default function ProtectedRoute(props) {
    const { isAuthenticated, isLoading } = useAuth0();
    useEffect(() => {
        if(!isLoading && !isAuthenticated){
            navigate('/')
        }
    }, [isLoading, isAuthenticated])

    const navigate = useNavigate()
    if (isLoading) {
      return <div>Loading ...</div>;
    }
    return props.children

}
