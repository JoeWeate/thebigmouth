import configureAxios from '../configureAxios'
import { useAuth0 } from '@auth0/auth0-react'

const api = configureAxios({});

export const getHelloWorld = (name = 'Joey') => {
    return api.get(`/world/${name}`, {
        name:"Joey"
    }).then((data) => {
        console.log(data.data)
        return Promise.resolve(data.data);
    }).catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
  }