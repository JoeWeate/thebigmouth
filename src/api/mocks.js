export const episodesMocks = [
  {
    EpisodeId: "S01E01",
    Image:
      "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/episode-1.png",
    Title: "Episode 1 Title",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    EpisodeId: "S01E02",
    Image:
      "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/episode-2.png",
    Title: "Episode 2 Title",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    EpisodeId: "S01E03",
    Image:
      "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/episode-3.png",
    Title: "Episode 3 Title",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    EpisodeId: "S01E04",
    Image:
      "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/episode-4.png",
    Title: "Episode 4 Title",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export const videoUrlMocks = "https://www.youtube.com/watch?v=DpPzA4OBVqo";
export const episodeInfoMocks = {
  Released: "Released",
  Rated: "Rated",
  RegionOfOrigin: "Region of Origin",
  OriginalAudio: "Original Audio",
};

export const auth0userMocks = {
  given_name: "Iryna",
  family_name: "Lypnyk",
  nickname: "iryna.lypnyk",
  name: "Iryna Lypnyk",
  picture: "https://lh3.googleusercontent.com/a/ACg8ocLXvgV",
  locale: "uk",
  updated_at: "2023-11-21T21:13:40.295Z",
  email: "iryna.lypnyk@gmail.com",
  email_verified: true,
  sub: "gouth2|46647109",
};

export const imgMocks =
  "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/media-banner-lg-10.png";
export const userHubVideoInfoMocks = {
  author: "Name Secondname",
  title: "Some Video Title",
  description: "Some short description and some more text to add several lines",
  date: "2022-01-01",
};

export const userHubVideoListMocks = [
  {
    videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
    videoImg:
      "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/media-banner-lg-10.png",
    author: "Andrius Secondname",
    title: "Some",
    description:
      "Some short description and some more text to add several lines",
    date: "2022-01-20",
    state: "draft",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
    videoImg:
      "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/media-banner-lg-10.png",
    author: "Sherif Secondname Two",
    title: "Some short",
    description:
      "Some short description and some more text to add several lines and more more more lines to add several lines and more more more lines to add several lines",
    date: "2023-07-10",
    message:
      "Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. ",
    state: "rejected",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
    videoImg:
      "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/media-banner-lg-11.png",
    author: "Olha Secondname Two",
    title: "Two",
    description:
      "Some short description and some more text to add several lines",
    date: "2023-07-12",
    state: "pending",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
    videoImg: "",
    author: "Bedi Secondname Two",
    title: "Title Two",
    description:
      "Some short description and some more text to add several lines",
    date: "2023-07-15",
    state: "approved",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
    videoImg: "",
    author: "Iryna Secondname Two",
    title: "Video Title Two",
    description:
      "Some short description and some more text to add several lines",
    date: "2023-07-18",
    state: "approved",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
    videoImg: "",
    author: "Joey Secondname Two",
    title: "Some Video Title Two",
    description:
      "Some short description and some more text to add several lines",
    date: "2023-07-21",
    state: "approved",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
    videoImg: "",
    author: "Halden",
    title: "The best video ever",
    description:
      "Some short description and some more text to add several lines",
    date: "2023-07-19",
    message:
      "Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers.",
    state: "rejected",
  },
];

export const irynaVideoMock = {
  "UserID": "google-oauth2|104634712040360930109",
  "Title": "Sample Title",
  "Timestamp": 1700667173773,
  "VideoID": "0eb0bbe7-a822-4499-a8e0-6cc7a498e7e",
  "Description": "Sample Video Description",
  "ShortDescription": "Sample Video Description",
  "State": "inReview",
  "Messages": [
    "Message 1",
    "Message 2"
  ],
  "URL": "https://www.youtube.com/watch?v=a3ICNMQW7Ok"
}

const XRayMocks = {
  seasonActors: [
    {
      name: "Lionel Boyce",
      actorImgSRC:
        "https://hips.hearstapps.com/hmg-prod/images/img0436-r01-034-1-6498d35a298bb.jpg?crop=0.716xw:1.00xh;0.0833xw,0&resize=1200:*",
      link: "https://www.imdb.com/name/nm5152633/?ref_=nm_mv_close",
      description:
        "Lionel Boyce is an actor known for his roles in various comedy projects. He may bring humor and charisma to the character of Marcus.",
    },
    {
      name: "Jeremy Allen White",
      actorImgSRC:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSd16XXV4JgOkgKsX2sB6rpqaqxR48AeZ2_dztdYW9rOdH8Q-KU3u_SVJ96UMDmL3wIfLKP64cKjMpIZk8",
      link: "https://www.imdb.com/name/nm2087739/?ref_=nv_sr_srsg_0_tt_0_nm_4_q_Jeremy%2520Allen%2520White",
      description:
        "Jeremy Allen White is an actor recognized for his work in television, including his role in the series `Shameless`. He could bring depth and versatility to the character of Carmen.",
    },
    {
      name: "Ayo Edebiri ",
      actorImgSRC:
        "https://people.com/thmb/Vlk-VIZYWcagpHK9Etl9wcEl9jo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(582x0:584x2):format(webp)/Ayo-Edebiri-eyebrows-082923-48a0886c99cf490592a182b9f74eb558.jpg",
      link: "https://www.imdb.com/name/nm8731249/?ref_=nv_sr_srsg_0_tt_0_nm_2_q_Ayo%2520Edebiri",
      description:
        "Ayo Edebiri is a comedian, writer, and actress. Her performances often showcase her comedic talents, and she might infuse humor into the character of Sydney.",
    },
    {
      name: "Corey Hendrix",
      actorImgSRC:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR7FgCz14rDryLjPA8kJJJWBmdrBCoqFcIJ58YolMmXjd-8iCFpmTYDouegQJayUxR-0ZaKg3lFQ4VCGMw",
      link: "https://www.imdb.com/name/nm4141529/?ref_=nv_sr_srsg_0_tt_0_nm_8_q_Corey%2520Hendrix",
      description:
        "Corey Hendrix's acting background is not as widely known, but he may bring unique qualities to the character of Gary, known as 'Sweeps.'",
    },
    {
      name: "Abby Elliott",
      actorImgSRC:
        "https://media.architecturaldigest.com/photos/5a3199dc38bb817b7ffe1bf1/16:9/w_2240,c_limit/GettyImages-813481880.jpg",
      link: "https://www.imdb.com/name/nm2212031/?ref_=nv_sr_srsg_0_tt_0_nm_8_q_Abby%2520Elliott",
      description:
        "Abby Elliott is an actress and comedian known for her work on Saturday Night Live. She could potentially bring humor and comedic timing to the character of Natalie, also known as Sugar.",
    },
    {
      name: "Edwin Lee Gibson ",
      actorImgSRC:
        "https://lookingglasstheatre.org/wp-content/uploads/2017/06/GibsonEdwin.jpg",
      link: "https://www.imdb.com/name/nm3958148/?ref_=nv_sr_srsg_0_tt_0_nm_1_q_Edwin%2520Lee%2520Gibson",
      description:
        "Edwin Lee Gibson's acting career might involve a range of roles, but specific information about his background is not provided.",
    },
    {
      name: "Liza Colón-Zayas ",
      actorImgSRC:
        "https://www.dexerto.com/cdn-cgi/image/width=2048,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/06/21/tina-liza-colon-zayas-the-bear-season-2-cast-characters-1024x683.jpg",
      link: "https://www.imdb.com/name/nm1154919/?ref_=nv_sr_srsg_0_tt_0_nm_1_q_Liza%2520Col%25C3%25B3n-Zayas",
      description:
        "Liza Colón-Zayas is an actress known for her work in both theater and television. She may bring versatility and depth to the character of Tina.",
    },
    {
      name: "Matty Matheson",
      actorImgSRC:
        "https://acehotel.com/wp-content/uploads/2021/11/MG_8243-1080x1167.jpg",
      link: "https://www.imdb.com/name/nm8274309/?ref_=nv_sr_srsg_0_tt_0_nm_8_q_Matty%2520Matheson",
      description:
        "Matty Matheson is a chef and television personality. It's interesting to see him in an acting role, and his portrayal of Neil Fak is worth exploring.",
    },
    {
      name: "Ebon Moss-Bachrach",
      actorImgSRC:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRhCdCDCxPTsa9Iw6dWk5EC36j5LJ7rr_dn9IT72e6J3vSGQNbZGIBZlCLWbLD1oX--ySlEextYGcjO4dw",
      link: "https://www.imdb.com/name/nm0609114/?ref_=nv_sr_srsg_0_tt_0_nm_2_q_Ebon%2520Moss-Bachrach",
      description:
        "Ebon Moss-Bachrach is an actor known for his roles in series like Girls. He might bring a unique charm or complexity to the character of Richie.",
    },
    {
      name: "Oliver Platt",
      actorImgSRC:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRXnlwhC8VNPqSWhVkvQl96eaKRorWp7Frge6aA1s1qz9CePR1otZqsrlIxyHqrpv3R5hRE2Go_5hxAolg",
      link: "https://www.imdb.com/name/nm0001624/?ref_=nv_sr_srsg_0_tt_2_nm_6_q_Oliver%2520Platt",
      description:
        "Oliver Platt is an accomplished actor known for his work in film and television. He could potentially add gravitas and depth to the character of Uncle Jimmy.",
    },
  ],
  XrayTime: [
    {
      start: 15,
      end: 123,
      actors: [0],
    },
    {
      start: 180,
      end: 183,
      actors: [1],
    },
    {
      start: 184,
      end: 186,
      actors: [2, 1],
    },
    {
      start: 192,
      end: 199,
      actors: [3],
    },
    {
      start: 200,
      end: 207,
      actors: [4],
    },
    {
      start: 214,
      end: 217,
      actors: [5],
    },
    {
      start: 218,
      end: 223,
      actors: [2],
    },
    {
      start: 224,
      end: 327,
      actors: [1, 2, 4, 6, 7],
    },
    {
      start: 337,
      end: 341,
      actors: [8],
    },
    {
      start: 342,
      end: 549,
      actors: [8, 1],
    },
    {
      start: 553,
      end: 601,
      actors: [2, 6],
    },
    {
      start: 602,
      end: 630,
      actors: [2, 6, 0],
    },
    {
      start: 631,
      end: 643,
      actors: [7],
    },
    {
      start: 644,
      end: 658,
      actors: [3, 5],
    },
    {
      start: 659,
      end: 672,
      actors: [0],
    },
    {
      start: 678,
      end: 693,
      actors: [2, 8],
    },
    {
      start: 694,
      end: 751,
      actors: [1, 4],
    },
    {
      start: 752,
      end: 922,
      actors: [1, 4, 2],
    },
    {
      start: 923,
      end: 972,
      actors: [1, 4],
    },
    {
      start: 975,
      end: 995,
      actors: [1],
    },
    {
      start: 995,
      end: 1010,
      actors: [2],
    },
    {
      start: 1010,
      end: 1019,
      actors: [4],
    },
    {
      start: 1020,
      end: 1022,
      actors: [9],
    },
    {
      start: 1023,
      end: 1249,
      actors: [9, 1, 4, 2],
    },
    {
      start: 1250,
      end: 1326,
      actors: [1, 4, 2, 8],
    },
    {
      start: 1349,
      end: 1428,
      actors: [2, 6],
    },
    {
      start: 1429,
      end: 1459,
      actors: [0, 5],
    },
    {
      start: 1460,
      end: 1476,
      actors: [8],
    },
    {
      start: 1486,
      end: 1492,
      actors: [1, 4, 2],
    },
    {
      start: 1492,
      end: 1546,
      actors: [2, 1],
    },
    {
      start: 1550,
      end: 1642,
      actors: [1],
    },
    {
      start: 1644,
      end: 1686,
      actors: [1, 4, 2],
    },
  ],
};

export default XRayMocks
