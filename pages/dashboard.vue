<script setup>
const auth = useAuthStore()
definePageMeta({middleware: ['auth']})

useSeoMeta({
  title: 'Dashboard',
  ogTitle: 'My Amazing Blog Website',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

// const { pending, data, error, execute, refresh } = await useFetch("https://saurav.tech/NewsAPI/everything/cnn.json",{
//   lazy: true
// });
</script>
<template>
  <div class="w-full h-screen p-4 bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome to Dashboard</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with us on iOS & Android. Download the app today.</p>
    <p>User Name: {{ auth.getUser?.name }}</p>
    <p>User Name: {{ auth.getUser?.email }}</p>
  </div>
</template>