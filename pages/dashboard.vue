<script setup>
const auth = useAuthStore()
definePageMeta({
  middleware: ['auth']
})
useHead({
  title: "Dashboard | NUXT JS CRUD Project"
})


// const {pending, data: posts} = await useFetch('https://fakestoreapi.com/products');

</script>
<template>
  <div class="p-4 bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome to Dashboard</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with us on iOS & Android. Download the app today.</p>
    <p>{{ auth.getUser?.name }}</p>
    <p>{{ auth.getUser?.email }}</p>
  </div>
</template>