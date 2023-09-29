import React from 'react'
import { Helmet } from 'react-helmet'

const TitleComponent = ({ title, description }) => {
    var defaultTitle = 'The Big Mouth'
    var defaultDescription = 'The Big Mouth is the online arm to the Big House'
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
            <meta name='description' content={description ? description : defaultDescription} />
        </Helmet>
    )
}
export { TitleComponent }
