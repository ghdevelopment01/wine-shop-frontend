import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    getAdminProfile:[],
}
const actions = {
    updateProfile: (context,data) => {
        const URl = `${baseURL}api/update-profile`
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email',data.email);
        formData.append('image', data.image);  
        const resp = axios.post(URl,formData);
        resp.then(response => {
            if(response.data.status){       
                context.dispatch('getProfile');
            }
         });
        return resp;   
      }, 
      getProfile: (context) => {        
        const URl = `${baseURL}api/admin/get-user`
        const resp = axios.post(URl);
        resp.then(response => {
            if(response.data.status){  
                context.commit('GET_PROFILE', response.data.data);               
            }
         });         
    },
}
const mutations = {
    GET_PROFILE: (state, items) => { 
        state.getAdminProfile = items;   
    },
}
const getters = {
    getProfileData: (state) => {
       return state.getAdminProfile;
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}