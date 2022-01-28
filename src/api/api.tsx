import axios from 'axios';

const request = axios.create({
    baseURL:'http://5c4b2a47aa8ee500142b4887.mockapi.io'
});

export const api = {
    getDragonsList: async () => {
        let respponse  = await request.get(`/api/v1/dragon`);
        return respponse.data;
    },

    getDragon: async (id : string) => {
        let respponse  = await request.get(`/api/v1/dragon/${id}`);
        return respponse.data;
    },

    createDragon: async (dragon : any) => {
        let respponse  = await request.post(`/api/v1/dragon`, dragon);
        return respponse.data;
    },

    updateDragon: async (id : string, dragon : any) => {
        let respponse  = await request.put(`/api/v1/dragon/${id}`, dragon);
        return respponse.data;
    },

    deleteDragon: async (id : any) => {
        let respponse  = await request.delete(`/api/v1/dragon/${id}`);
        return respponse.data;
    }
};