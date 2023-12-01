export const USER_ROLE = {
    USER: 'User',
    ADMIN: 'Admin'
};

export const VIDEO_STATE = {
    DRAFT: 'draft', //[USER: prevState === null (just uploaded) || prevState === DRAFT (editing)],
    IN_REVIEW: 'inReview', //[USER: prevState === DRAFT, ADMIN: prevState === null]
    APPROVED: 'approved',//[USER: prevState === IN_REVIEW, ADMIN: prevState === IN_REVIEW]
    BLOCKED: 'blocked',//[USER: prevState === IN_REVIEW, ADMIN: prevState === IN_REVIEW]
}

//VIDEO_STATE.PENDING
    // ===> VIDEO_STATE.APPROVED
    // ===> VIDEO_STATE.BLOCKED

export const ACTION_NAME = {
    UPLOAD: 'upload',
    APPROVE: 'approve',
    REJECT: 'reject',
    BLOCK: 'block',
    EDIT: 'edit',
    DELETE: 'delete',
    SEND_FOR_REVIEW: 'sendForReview',
    MOVE_TO_DRAFT: 'moveToDraft',
}

export const VIDEO_STATES = [
    VIDEO_STATE.DRAFT,
    VIDEO_STATE.IN_REVIEW,
    VIDEO_STATE.APPROVED,
    VIDEO_STATE.BLOCKED
]
export const VIDEO_STATE_UPDATE_ACTIONS = {
    [USER_ROLE.USER] : {
        [ACTION_NAME.UPLOAD]: {
            validate: (currentState) => currentState === undefined,
            nextSate: VIDEO_STATE.DRAFT
        },
        [ACTION_NAME.SEND_FOR_REVIEW]: {//PUT
            validate: (currentState) => currentState === VIDEO_STATE.DRAFT,
            nextSate: VIDEO_STATE.IN_REVIEW,
        },
        [ACTION_NAME.EDIT]:{//PUT
            validate: (currentState) => currentState === VIDEO_STATE.DRAFT,
            nextSate: VIDEO_STATE.DRAFT,
        },
        [ACTION_NAME.DELETE]:{//DELETE
            validate: (currentState) => currentState === VIDEO_STATE.DRAFT,
            nextSate: null,
        },
        [ACTION_NAME.MOVE_TO_DRAFT]:{//PUT
            validate: (currentState) => currentState === VIDEO_STATE.IN_REVIEW || currentState === VIDEO_STATE.APPROVED,
            nextSate: VIDEO_STATE.DRAFT
        }
    },
    [USER_ROLE.ADMIN] : {
        [ACTION_NAME.APPROVE]:{//PUT
            validate: (currentState) => currentState === VIDEO_STATE.IN_REVIEW,
            nextSate: VIDEO_STATE.APPROVED
        },
        [ACTION_NAME.REJECT]:{//PUT
            validate: (currentState) => currentState ===  VIDEO_STATE.APPROVED || currentState === VIDEO_STATE.IN_REVIEW,
            nextSate: VIDEO_STATE.DRAFT//with rejection message
        },
        [ACTION_NAME.BLOCK]:{//PUT
            validate: (currentState) => currentState ===  VIDEO_STATE.APPROVED || currentState === VIDEO_STATE.IN_REVIEW,
            nextSate: VIDEO_STATE.BLOCKED,
        },
    }
}

export const USER_PAGES = [ //USER PAGES IN DASHBOARD
    {
        page: 'All my videos',
        videoState: [VIDEO_STATE.APPROVED]
    },
    {
        page: 'Drafts',
        videoState: [VIDEO_STATE.DRAFT]
    },
    {
        page: 'Pendings',
        videoState:  [VIDEO_STATE.IN_REVIEW]
    },
    {
        page: 'Restricted',
        videoState:  [VIDEO_STATE.BLOCKED]
    }
]

export const ADMIN_PAGES = [//ADMIN PAGES IN DASHBOARD
    {
        page: 'Waiting list',//all videos with filter by user????
        videoState: [VIDEO_STATE.IN_REVIEW]
    },
    {
        page: 'ALL videos',
        videoState: [VIDEO_STATE.APPROVED]
    },
]

export const VIDEO_DATA_KEYS = {
    USER_ID: 'UserID',
    TITLE: 'Title',
    TIMESTAMP: 'Timestamp',
    VIDEO_DATA: 'VideoData',
    VIDEO_ID: 'VideoID',
    DESCRIPTION: 'Description',
    STATE: 'State',
    MESSAGES: 'Messages',
    URL: 'URL'

};