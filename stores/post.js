export const usePostStore = defineStore("post", {
    state: () => ({
        isLoading: false,
    }),

    getters: {

    },

    actions: {
        async createPosts(formData) {
            this.isLoading = true

            try {
                const { data }  = await $fetch(`${baseURL}api/posts`, {
                    method: "POST",
                    body: { ... formData},
                });
            }   catch (error){
                this.isLoading = false
            }
        }
    }
})