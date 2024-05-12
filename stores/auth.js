export const useAuthStore = defineStore('auth', {

    state: () => ({ count: 0, name: 'Eduardo' }),

    getters: {
     
    },
    actions: {
       async login (formData) {
            const token = useTokenStore();
            try{
                 const {data}  = await $fetch("http://localhost:8000/api/login", {
                     method: "POST",
                     body: { ... formData},
                 });
                 token.setToken(data.token);
            }catch (error){
             throw error;   
            }
            
         }
    },
  })