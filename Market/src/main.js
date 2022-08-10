import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Market from './components/Market.vue'
import './assets/main.css'

const router=createRouter({
    history:createWebHistory(),
    routes:[{
        path:'/', component: Home
    },
    {
        path:'/market' , component:Market
    }
]
})
createApp(App).use(router).mount('#app')
