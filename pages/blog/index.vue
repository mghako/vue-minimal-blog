<script setup>
    import { usePostStore } from '~/store/post';
    import {storeToRefs} from 'pinia';

    
    const { posts, pending, error } = storeToRefs(usePostStore());
    const { getAllPosts } = usePostStore();

    onMounted( () => {
        getAllPosts();
    });

</script>
<template>
    <div v-if="pending">loading...</div>
    <div v-else>
        <InnerContainer>
            <Posts v-if="posts.data" :posts="posts"/>
 
        </InnerContainer>
    </div>
</template>