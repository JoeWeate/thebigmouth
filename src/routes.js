import {USER_ROLE, VIDEO_STATE} from "./utils/constants";

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
            [VIDEO_STATE.APPROVED]: {
                displayName: 'All My Live Videos',
                path: `/dashboard/${USER_ROLE.USER}/${VIDEO_STATE.APPROVED}`,
            },
            [VIDEO_STATE.DRAFT]: {
                displayName: 'Drafts',
                path: `/dashboard/${USER_ROLE.USER}/${VIDEO_STATE.DRAFT}`,
            },
            [VIDEO_STATE.IN_REVIEW]: {
                displayName: 'In Review',
                path: `/dashboard/${USER_ROLE.USER}/${VIDEO_STATE.IN_REVIEW}`,
            },
            [VIDEO_STATE.BLOCKED]: {
                displayName: 'Restricted',
                path: `/dashboard/${USER_ROLE.USER}/${VIDEO_STATE.BLOCKED}`,
            },
        },
        [USER_ROLE.ADMIN]: {
            allUsers: {
                displayName: 'All Users',
                path: `/dashboard/${USER_ROLE.ADMIN}/all-users`,
            },
            allUsersVideos: {
                displayName: 'All Users Videos',
                path: `/dashboard/${USER_ROLE.ADMIN}/${VIDEO_STATE.APPROVED}`,
            },
            [VIDEO_STATE.IN_REVIEW]: {
                displayName: 'Waiting List',
                path: `/dashboard/${USER_ROLE.ADMIN}/${VIDEO_STATE.IN_REVIEW}`,
            },
            [VIDEO_STATE.BLOCKED]: {
                displayName: 'Restricted',
                path: `/dashboard/${USER_ROLE.ADMIN}/${VIDEO_STATE.BLOCKED}`,
            },
        },
    },
};