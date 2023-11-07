import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"

import { Grid } from '@mui/material'

export default function PostAuthenticate(){
    const navigate = useNavigate()
    const { getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        async function storeToken() {
            const accessToken = await getAccessTokenSilently()
            console.log(accessToken)
            localStorage.setItem('access_token', accessToken)
            navigate('/')
        }
        storeToken()
      }, [])

    return(
       <Grid>Loading..</Grid>
    )
}