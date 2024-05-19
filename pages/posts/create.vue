<script setup>
import {usePostStore} from "~/stores/post.js";

const auth = useAuthStore()
const post = usePostStore()
definePageMeta({
  middleware: ['auth']
})
useSeoMeta({
  title: 'Post Create',
  ogTitle: 'My Amazing Blog Website',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
const { pending, data, error, execute, refresh } = await useFetch(`${baseURL}api/get_cat`);
const files = ref();


const form = reactive({
  post_title: null,
  post_slug: null,
  post_content: null,
  post_category: null,
  post_status: null,
  post_image: null
});
const errors = ref([]);

function onFileChange(e) {
  const input = e.target;
  if(input.files && input.files[0]){
    const reader = new FileReader();
    reader.onload = (e) => {
      form.post_image = e.target.result
    }
    reader.readAsDataURL(input.files[0]);

  }

}
const handlePostSubmit = async () => {
  try{
    await post.createPosts(form)
  }catch (error){
    errors.value = error.data.errors;
  }
}

</script>
<template>
  <div class="max-w-full mx-auto space-y-6">
    <div class="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
      <form @submit.prevent="handlePostSubmit">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
          <div class="col-span-2 border p-4 rounded-md dark:border-gray-700"> <!-- Column 1 -->
            <!-- Content for column 1 -->
            <div>
              <FormLabel for="name">Your Name</FormLabel>
              <FormInput type="text" id="name" v-model="form.post_title" placeholder="Enter your name"/>
            </div>
            <div class="mt-5">
              <FormLabel for="slug">Slug</FormLabel>
              <FormInput type="text" id="slug" v-model="form.post_slug" placeholder="Enter your slug"/>
            </div>
            <div class="mt-5">
              <FormLabel for="description">Your Content</FormLabel>
              <FormTextArea rows="5" cols="30" v-model="form.post_content" id="description"></FormTextArea>
           </div>

            <div class="mt-5">
              <FormLabel for="is_publish">Status</FormLabel>
              <FormSelect id="is_publish" v-model="form.post_status">
                <option value="" selected>Select status</option>
                <option value="1">Publish</option>
                <option value="2">Not Publish</option>
              </FormSelect>
            </div>

            <div class="mt-5">
              <FormLabel for="category_id">Category</FormLabel>
              <FormSelect id="category_id" v-model="form.post_category">
                <option value="" selected>Select Category</option>
                <option v-for="category in data" :value="category.id">{{category.name}}</option>
              </FormSelect>
            </div>
            <div class="mt-5">
              <div class="flex items-center justify-center h-40 w-40">
                <label for="dropzone-file" class="flex flex-col items-center justify-center border-2 h-40 w-40 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50  hover:bg-gray-100">
                  <div v-if="!form.post_image" class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500">Click to upload</p>
                  </div>
                  <img v-else :src="form.post_image" class="h-40 w-40 rounded-md object-fill"/>
                  <input id="dropzone-file" name="post_image" type="file" class="hidden" @change="onFileChange" />
                </label>
              </div>
            </div>

          </div>


          <div class="border p-4 rounded-md dark:border-gray-700"> <!-- Column 2 -->
            <div>
              <FormLabel for="slug">Slug</FormLabel>
              <FormInput type="text" id="slug" name="slug" placeholder="Enter your slug"/>
            </div>
            <div class="mt-5">
              <FormLabel for="description">Your Content</FormLabel>
              <FormTextArea rows="5" cols="30" id="description"></FormTextArea>
            </div>
            <div class="mt-5">
              <FormLabel for="meta_image">OG Image</FormLabel>
              <input value="" name="meta_image" class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="meta_image" type="file">
            </div>


          </div>
        </div>
        <div class="flex items-center mt-3">
          <div class="flex items-center mt-3">
            <ButtonPrimary>Add Post</ButtonPrimary>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
