export const useTokenStore = defineStore('token', {

    state: () => ({ 
        token: null, 
        loggedIn: false
     }),

    getters: {
     
    },
    actions: {
        setToken(token){
            this.token = token;
            loggedIn = true;
        }
    }
  })