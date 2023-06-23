import {defineStore} from 'pinia';

export const usePostStore = defineStore({
    id: 'post',
    state: () => {
        return {
            posts: [],
            post: null,
            pending: false,
            error: null
        }
    },
    getters: {
        // getPost
    },
    actions: {
        async getAllPosts(page = 1) {
            try {
                this.posts = await fetch(`http://api-blog.test/api/v1/posts?page=${page}`)
                    .then(res => res.json());    
            } catch (error) {
                this.error  = error
            } finally {
                this.pending = false
            }
                
        },
        async getPostByKey(key) {
            try {
                this.post = await fetch(`http://api-blog.test/api/v1/posts?key=${key}`)
                .then( res => res.json())
            } catch (error) {
                this.error = error
            } finally {
                this.pending = false
            }
        }

    }
})