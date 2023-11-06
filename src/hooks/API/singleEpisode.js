import configureAxios from '../configureAxios';

const api = configureAxios({});

export const getSingleEpisode = (id, episode_id) => {
    return api.get(`/episodes/${id}?episode_id=${episode_id}`, {
    }).then((data) => {
        return Promise.resolve(data.data);
    }).catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
}
