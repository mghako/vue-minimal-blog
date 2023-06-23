<script setup>
    import { usePostStore } from '~/store/post';
    import {storeToRefs} from 'pinia';
    const {posts, post, pending, error} = storeToRefs(usePostStore());
    const { getAllPosts } = usePostStore();
    // defineProps(['meta']);


    console.log('hehe')
    const getNextPosts = async (page) => {
        //  getAllPosts()
        console.log('page', page);
    }
    console.log('hehe 2')

    onMounted( () => {
        // load.value = true
    })
</script>
<template>

<div class="w-auto mx-auto">
    <!-- Previous Button -->
    <!-- <NuxtLink to="">
        Next
    </NuxtLink> -->
    
    <button :click="getNextPosts(2)" class="flex block bg-green-400 text-center">
        {{ posts.meta }}
    </button>
    <!-- <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Previous
    </a> -->

    <!-- Next Button -->
    <!-- <a href="#" class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Next
    </a> -->
</div>

</template>