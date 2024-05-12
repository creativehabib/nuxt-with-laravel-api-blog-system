<script setup>
    definePageMeta({layout: false,});

    const auth = useAuthStore();



    const form = reactive({
        email: 'test@gmail.com',
        password: 'password'
    });
    const errors = ref([]);
    const handleSubmit = async () => {

       try{
           await auth.login(form)
       }catch (error){
        errors.value = error.data.errors;   
       }
       
    }
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
                        <div>
                            <FormLabel for="email">Your Email</FormLabel>
                            <FormInput type="email" id="email" placeholder="example@gmail.com" v-model="form.email"/>
                            <span v-if="errors.email" class="text-red-700 text-sm">{{ errors.email[0] }}</span>
                        </div>
                        <div>
                            <FormLabel for="password">Password</FormLabel>
                            <FormInput type="password" id="password" placeholder="••••••••" v-model="form.password"/>
                            <span v-if="errors.password" class="text-red-700 text-sm">{{ errors.password[0] }}</span>
                          </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                                </div>
                                <div class="ml-3 text-sm">
                                    <FormLabel for="remember">Remember me</FormLabel>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
                        </div>
                        <ButtonPrimary>Sign in</ButtonPrimary>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <NuxtLink :to="{name: 'auth-register'}" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</NuxtLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>