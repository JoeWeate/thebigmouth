import configureAxios from './configureAxios';

const api = configureAxios({});

export const getOneEpisode = ({SeriesId, EpisodeId}) => {
    return api.get(`/episodes/${SeriesId}/${EpisodeId}`)
        .then((data) => {
            return Promise.resolve(data.data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}