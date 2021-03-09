import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/App.vue'
import Quiz from '@/components/quiz/Index.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [{
        path: '/',
        component: Index
    }, {
        path: '/quiz',
        component: Quiz
    }]
})