import VideoBox from "../userHub/VideoBox";
import TopCover from "./TopCover";

const DashboardVideo = ({ video, page, withTopCover = false }) => {

    const { URL, videoImg } = video;
    const maxWidth = "500px";
    return (
        <VideoBox videoUrl={URL} maxWidth={maxWidth} videoImg={videoImg}>
            {
                () => (withTopCover ? <TopCover maxWidth={maxWidth} state={page} />: null)
            }
        < /VideoBox>
    );
}

export default DashboardVideo;