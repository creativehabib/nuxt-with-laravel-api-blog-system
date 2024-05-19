<script setup>
const auth = useAuthStore()
definePageMeta({
  middleware: ['auth']
})
useSeoMeta({
  title: 'Category Create',
  ogTitle: 'My Amazing Blog Website',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
    <div class="max-w-full mx-auto space-y-6">
      <div class="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        <form action="#" method="POST" enctype="multipart/form-data">
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
            <div class="col-span-2 border p-4 rounded-md dark:border-gray-700"> <!-- Column 1 -->
              <!-- Content for column 1 -->
              <div>
                <FormLabel for="name">Your Name</FormLabel>
                <FormInput type="text" id="name" placeholder="Enter your name"/>
              </div>
              <div class="mt-5">
                <FormLabel for="slug">Slug</FormLabel>
                <FormInput type="text" id="slug" name="slug" placeholder="Enter your slug"/>
              </div>
              <div class="mt-5">
                <FormLabel for="description">Your Content</FormLabel>
                <FormTextArea rows="5" cols="30" id="description" placeholder="Your category details"></FormTextArea>
              </div>

              <div class="mt-5">
                <FormLabel for="is_publish">Status</FormLabel>
                <FormSelect id="is_publish">
                  <option value="" selected>Select status</option>
                  <option value="1">Publish</option>
                  <option value="2">Not Publish</option>
                </FormSelect>
              </div>

              <div class="mt-5">
                <FormLabel for="post_image">Image Upload</FormLabel>
                <input value="" name="post_image" class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="post_image" type="file">
              </div>

            </div>


            <div class="border p-4 rounded-md dark:border-gray-700"> <!-- Column 2 -->
              <div>
                <FormLabel for="slug">Slug</FormLabel>
                <FormInput type="text" id="slug" name="slug" placeholder="Enter your slug"/>
              </div>
              <div class="mt-5">
                <FormLabel for="meta_description">Your Content</FormLabel>
                <FormTextArea id="meta_description"></FormTextArea>
              </div>
              <div class="mt-5">
                <FormLabel for="meta_image">OG Image</FormLabel>
                <input value="" name="meta_image" class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="meta_image" type="file">
              </div>


            </div>
          </div>
          <div class="flex items-center mt-3">
            <div class="flex items-center mt-3">
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Category</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>
