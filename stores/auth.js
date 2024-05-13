export const useAuthStore = defineStore('auth', {

    state: () => ({
        user: {},
        isLoading: false
    }),
    persist: {
        paths: ['user']
    },
    getters: {
        getUser: (state) => state.user
    },
    actions: {
       async login (formData) {
            this.isLoading = true
            try{
                 const { data }  = await $fetch("http://localhost:8000/api/login", {
                     method: "POST",
                     body: { ... formData},
                 });
                this.commonSetter(data)
            }catch (error){
                this.isLoading = false;
             throw error;   
            }
            
         },
        async register (formData) {
            this.isLoading = true
            try{
                const { data }  = await $fetch("http://localhost:8000/api/register", {
                    method: "POST",
                    body: { ... formData},
                });
                this.commonSetter(data)
            }catch (error){
                this.isLoading = false
                throw error;
            }

        },
        async logout () {
           const tokenStore = useTokenStore()
            try{
                const res  = await $fetch("http://localhost:8000/api/logout", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${tokenStore.getToken}`,
                    }
                });
                tokenStore.removeToken();
                console.log(res)
            }catch (error){
                throw error;
            }

        },
        commonSetter(data){
            const token = useTokenStore();
            token.setToken(data.token);
            this.user = data.user;
            return navigateTo('/dashboard')
        }
    },
  })