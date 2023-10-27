import configureAxios from '../configureAxios';

const api = configureAxios({});

export const getSingleEpisode = async (id, episode_id) => {
    try {
        const response = await api.get(`/episodes/${id}?episode_id=${episode_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error to handle it upstream, or handle it here if needed
    }
}

