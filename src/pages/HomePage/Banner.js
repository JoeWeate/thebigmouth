import { Box } from "@mui/material";
import ScrollDownBtn from "../../components/ScrollDownBtn";
import ReactPlayer from "react-player";
import { useState, useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const Banner = ({ targetRef }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [ref, inView] = useInView(true);

    console.log('isPlaying:', isPlaying);
    console.log('inView:', inView);

    const playerRef = useRef(null);

    const videoLink = "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/latestedit+(1).mp4";


    useEffect(() => {
        if (inView && !isPlaying) {
            setIsPlaying(true);
        } else if (!inView && isPlaying) {
            setIsPlaying(false);
        }
    }, [inView, isPlaying]);

    const handleVideoEnd = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(0);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                height: "95vh",
                width: "100%",
                borderRadius: 0,
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "80%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    objectFit: "cover",
                }} />

            <div ref={ref}>
                <ReactPlayer
                    ref={playerRef}
                    url={videoLink}
                    playing={isPlaying}
                    onEnded={handleVideoEnd}
                    width="100%"
                    height="100vh"
                    loop
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <ScrollDownBtn targetRef={targetRef} />
        </Box>
    );
};

export default Banner;
