import {VIDEO_DATA_KEYS, VIDEO_STATE_UPDATE_ACTIONS} from './constants';


export const validateChangeState = ({videoData, action, userRole}) => {
    try {
        const isValid = VIDEO_STATE_UPDATE_ACTIONS[userRole][action].validate(videoData[VIDEO_DATA_KEYS.STATE]);
        if(isValid) {
            return VIDEO_STATE_UPDATE_ACTIONS[userRole][action].nextSate;
        } else {
            return false;
        }
    } catch(error) {
        console.log(error)
    }
};
