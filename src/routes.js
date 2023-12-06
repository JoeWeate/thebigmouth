import {USER_ROLE} from "./utils/constants";

export const routes = {
    home: {
        displayName: 'Home',
        path: '/',
    },
    login: {
        displayName: 'Login',
        path: '/login',
    },
    multimedia: {
        displayName: 'Multimedia',
        path: '/multimedia/:ID',
    },
    episode:{
        displayName: 'Episode',
        path: "/episode/:SeriesId/:EpisodeId"
    },
    videoHub: {
        home: {
            displayName: 'VideoHub Page',
            path: '/videohub',
        },
        videoUpload: {
            displayName: 'Video Upload Form',
            path: '/video-upload',
        },
        profile: {
            displayName: 'Profile',
            path: '/profile',
        },
    },
    dashboard: {
        displayName: 'Dashboard',
        path: '/dashboard/:role/:page',
        basePath: '/dashboard',
        [USER_ROLE.USER]: {
            approved: {
                displayName: 'All My Live Videos',
                path: `/dashboard/${USER_ROLE.USER}/approved`,
            },
            drafts: {
                displayName: 'Drafts',
                path: `/dashboard/${USER_ROLE.USER}/drafts`,
            },
            inReview: {
                displayName: 'In Review',
                path: `/dashboard/${USER_ROLE.USER}/pending`,
            },
            blocked: {
                displayName: 'Restricted',
                path: `/dashboard/${USER_ROLE.USER}/blocked`,
            },
        },
        [USER_ROLE.ADMIN]: {
            allUsers: {
                displayName: 'All Users',
                path: `/dashboard/${USER_ROLE.ADMIN}/all-users`,
            },
            allUsersVideos: {
                displayName: 'All Users Videos',
                path: `/dashboard/${USER_ROLE.ADMIN}/all-users-videos`,
            },
            inReview: {
                displayName: 'Waiting List',
                path: `/dashboard/${USER_ROLE.ADMIN}/in-review`,
            },
            blocked: {
                displayName: 'Restricted',
                path: `/dashboard/${USER_ROLE.ADMIN}/blocked`,
            },
        },
    },
};