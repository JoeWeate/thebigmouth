export const episodesMocks = [
    {
        EpisodeId: "S01E01",
        Image: "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/episode-1.png",
        Title: "Episode 1 Title",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        EpisodeId: "S01E02",
        Image: "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/episode-2.png",
        Title: "Episode 2 Title",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        EpisodeId: "S01E03",
        Image: "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/episode-3.png",
        Title: "Episode 3 Title",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        EpisodeId: "S01E04",
        Image: "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/episode-4.png",
        Title: "Episode 4 Title",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];

export const videoUrlMocks = "https://www.youtube.com/watch?v=DpPzA4OBVqo";
export const episodeInfoMocks = {
    Released: "Released",
    Rated: "Rated",
    RegionOfOrigin: "Region of Origin",
    OriginalAudio: "Original Audio"
};

export const imgMocks = "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/media-banner-lg-10.png";
export const userHubVideoInfoMocks = {
    author: "Name Secondname",
    title: "Some Video Title",
    description: "Some short description and some more text to add several lines",
    date: "2022-01-01"
};

export const userHubVideoListMocks = [
    {
        videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
        videoImg: "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/media-banner-lg-10.png",
        author: "Name Secondname",
        title: "Some Video Title",
        description: "Some short description and some more text to add several lines",
        date: "2022-01-01",
        state: "draft"
    },
    {
        videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
        videoImg: "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/media-banner-lg-10.png",
        author: "Name Secondname Two",
        title: "Some Video Title Two",
        description: "Some short description and some more text to add several lines and more more more lines to add several lines and more more more lines to add several lines",
        date: "2023-07-01",
        message: "Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. ",
        state: "restricted"
    },
    {
        videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
        videoImg: "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/media-banner-lg-11.png",
        author: "Name Secondname Two",
        title: "Some Video Title Two",
        description: "Some short description and some more text to add several lines",
        date: "2023-07-01",
        state: "pending"
    },
    {
        videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
        videoImg: "",
        author: "Name Secondname Two",
        title: "Some Video Title Two",
        description: "Some short description and some more text to add several lines",
        date: "2023-07-01",
        state: "approved"
    },
    {
        videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
        videoImg: "",
        author: "Olha",
        title: "The best video ever",
        description: "Some short description and some more text to add several lines",
        date: "2023-07-01",
        message: "Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers.",
        state: "restricted"
    }
];
