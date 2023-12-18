import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.headers.common['Authorization'] = `bearer${localStorage.getItem('token')}`

Vue.use({
    install(vue) {
        vue.prototype.$http = axios
    }
})