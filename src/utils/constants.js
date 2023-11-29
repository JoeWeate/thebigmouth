export const USER_ROLE = {
    USER: 'User',
    ADMIN: 'Admin'
};

export const VIDEO_STATE = {
    DRAFT: 'draft', //[USER: prevState === null (just uploaded)],
    PENDING: 'pending', //[USER: prevState === DRAFT, ADMIN: prevState === null]
    APPROVED: 'approved',//[USER: prevState === PENDING, ADMIN: prevState === PENDING]
    BLOCKED: 'blocked',//[USER: prevState === PENDING, ADMIN: prevState === PENDING]
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
    MOVE_TO_PENDING: 'moveToPending',
    MOVE_TO_DRAFT: 'moveToDraft',
}

export const USER_ACTIONS = [
    {//POST
        action: ACTION_NAME.UPLOAD,
        currentState: null,
        nextSate: VIDEO_STATE.DRAFT
    },
    {//PUT
        action: ACTION_NAME.MOVE_TO_PENDING,
        currentState: VIDEO_STATE.DRAFT,
        nextSate: VIDEO_STATE.PENDING,
    },
    {//PUT
        action: ACTION_NAME.EDIT,
        currentState: VIDEO_STATE.DRAFT,
        nextSate: VIDEO_STATE.DRAFT,
    },
    {//DELETE
        action: ACTION_NAME.DELETE,
        currentState: VIDEO_STATE.DRAFT,
        nextSate: null,//do we keep it in DB?
    },
    {//PUT
        action: ACTION_NAME.MOVE_TO_DRAFT,
        currentState: VIDEO_STATE.PENDING || VIDEO_STATE.APPROVED,
        nextSate: VIDEO_STATE.DRAFT
    }
 ]
export const ADMIN_ACTIONS = [
    {//PUT
        action: ACTION_NAME.APPROVE,
        currentState: VIDEO_STATE.PENDING,
        nextSate: VIDEO_STATE.APPROVED
    },
    {//PUT
        action: ACTION_NAME.REJECT,
        currentState: VIDEO_STATE.APPROVED || VIDEO_STATE.PENDING,
        nextSate: VIDEO_STATE.DRAFT//with rejection message
    },
    {//PUT
        action: ACTION_NAME.BLOCK,
        currentState: VIDEO_STATE.APPROVED || VIDEO_STATE.PENDING,
        nextSate: VIDEO_STATE.BLOCKED,
    },
];

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
        videoState:  [VIDEO_STATE.PENDING]
    },
    {
        page: 'Restricted',
        videoState:  [VIDEO_STATE.BLOCKED]
    }
]

export const ADMIN_PAGES = [//ADMIN PAGES IN DASHBOARD
    {
        page: 'Waiting list',//all videos with filter by user????
        videoState: [VIDEO_STATE.PENDING]
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