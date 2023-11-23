import React from 'react';
import VideoBox from "./VideoBox";
import VideoPlayBtn from "../VideoPlayBtn";
import ImageOverlay from "../ImageOverlay";
import VideoDecor from "./VideoDecor";


const VideoBoxWithDecor = ({videoUrl, videoImg, maxWidth = "600px"}) => {

    return (
        <VideoBox videoUrl={videoUrl} videoImg={videoImg} maxWidth={maxWidth}>
            {(playVideo, hover) => (
                <>
                    {!playVideo && (
                        <>
                            <ImageOverlay hover={hover} opacity={0.5}/>
                            <VideoDecor hover={hover}/>
                            <VideoPlayBtn hover={hover}/>
                        </>
                    )}
                </>
            )}
        </VideoBox>
    )
}

export default VideoBoxWithDecor;