import { VIDEO_DATA_KEYS, USER_ROLE, VIDEO_STATE, ACTION_NAME } from './constants';

export const validateChangeState = ({videoData, action, userRole}) => {

    try {
        let nextState = null;
        const currentVideoState = videoData[VIDEO_DATA_KEYS.STATE];

        if (action === ACTION_NAME.APPROVE) {
            if (userRole === USER_ROLE.ADMIN && (currentVideoState === VIDEO_STATE.IN_REVIEW)) {
                nextState = VIDEO_STATE.APPROVED;
            }
        } else if (action === ACTION_NAME.REJECT) {
            if (userRole === USER_ROLE.ADMIN && (currentVideoState === VIDEO_STATE.IN_REVIEW || currentVideoState === VIDEO_STATE.APPROVED)) {
                nextState = VIDEO_STATE.DRAFT;
            }
        } else if (action === ACTION_NAME.BLOCK) {
            if (userRole === USER_ROLE.ADMIN && (currentVideoState === VIDEO_STATE.IN_REVIEW || currentVideoState === VIDEO_STATE.APPROVED)) {
                nextState = VIDEO_STATE.BLOCKED;
            }
        } else if (action === ACTION_NAME.SEND_FOR_REVIEW) {
            if (userRole === USER_ROLE.USER && (currentVideoState === VIDEO_STATE.DRAFT)) {
                nextState = VIDEO_STATE.IN_REVIEW;
            }
        } else if (action === ACTION_NAME.MOVE_TO_DRAFT) {
            if (userRole === USER_ROLE.USER && (currentVideoState === VIDEO_STATE.IN_REVIEW || currentVideoState === VIDEO_STATE.APPROVED)) {
                nextState = VIDEO_STATE.DRAFT;
            }
        } else if (action === ACTION_NAME.EDIT) {
            if (userRole === USER_ROLE.USER && (currentVideoState === VIDEO_STATE.DRAFT)) {
                nextState = VIDEO_STATE.DRAFT;
            }
        }
        return nextState;
    } catch (error) {
        console.error(error);
    }
};
