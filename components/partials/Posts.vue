<script setup>
    
    const props = defineProps({
        posts: {
            type: Object,
            default: {}
        }
    });

    const loaded = ref(false);

    const activePrev = computed( () => {
        return props.posts.meta.current_page <= 1;
    });

    const activeNext = computed( () => {
        return props.posts.meta.to == null;
    });
    const nextPage = computed( () => {
        return props.posts.meta.current_page += 1;
    });

    const prevPage = computed( () => {
        if(props.posts.meta.current_page != 1) {
            return props.posts.meta.current_page -= 1;
        };
        return 1;
    });

    const getNextPosts = () => {
        getAllPosts(nextPage.value);
    }

    const getPrevPosts = () => {
        getAllPosts(prevPage.value);
    }

    onMounted( () => {
        if(props.posts) loaded.value = true;
    });
</script>

<template>
    <div v-for="post in props.posts.data">
        <h3 class="underline mb-4 text-2xl">{{ post.title }}</h3>
        <p>{{ post.content }}</p>
    </div>
    <div
        v-if="loaded"
        class="block text-center"
    >
        <button
            :disabled="activePrev"
            v-on:click="getPrevPosts" 
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            :class="{'cursor-not-allowed' : activePrev}"
        >
            Previous
        </button>
        <button
            v-if="posts.links?.next"
            :disabled="activeNext"
            v-on:click="getNextPosts" 
            class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
        </button>
    </div>
</template>