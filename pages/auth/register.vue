<script setup>
definePageMeta({
  layout: false,
  middleware: ['guest']
})
useSeoMeta({
  title: 'Register',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
const auth = useAuthStore();

const form = reactive({
  name: null,
  email: null,
  password: null,
  password_confirmation: null,
});
const errors = ref([]);
const handleSubmit = async () => {
  try{
    await auth.register(form)
  }catch (error){
    errors.value = error.data.errors;
  }

}
</script>
import { NuxtLink } from '#build/components';
<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign up to create account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
                        <div>
                          <FormLabel for="name">Your Name</FormLabel>
                          <FormInput type="text" id="name" placeholder="Enter your name" v-model="form.name"/>
                          <span v-if="errors.name" class="text-red-700 text-sm">{{ errors.name[0] }}</span>
                        </div>
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

                        <div>
                          <FormLabel for="password_confirmation">Confirm Password</FormLabel>
                          <FormInput type="password" id="confirm_password" placeholder="••••••••" v-model="form.password_confirmation"/>
                          <span v-if="errors.password_confirmation" class="text-red-700 text-sm">{{ errors.password_confirmation[0] }}</span>
                        </div>

                        <template v-if="auth.isLoading">
                            <ButtonLoading>Loading...</ButtonLoading>                            
                        </template>
                        <template v-else>
                            <ButtonPrimary>Sign up</ButtonPrimary>
                        </template>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <NuxtLink :to="{name: 'auth-login'}" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Login</NuxtLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>