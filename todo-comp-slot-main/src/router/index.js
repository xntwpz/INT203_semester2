// this is config file
import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue"
import TodoList from "../components/TodoManager.vue"
import TodoDetail from "../components/TodoDetail.vue"

// set history object to store path when visiting
const history = createWebHistory()
//give route path
const routes = [ // one object = one path
    { path: '/todo-detail/:todoId', name: 'TodoDetail', component: TodoDetail },
    { path: '/login', name: 'Login', component: Login },
    { path: '/', name: 'Aboutus', component: About },
    //redirect for path  that doesn't have
    { path: '/home', name: 'Home', component: TodoList },
    // not found
    { path: '/:notfoundpath(.*)', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history,
    routes,
    linkExactActiveClass: 'text-purple-500'
})
export default router