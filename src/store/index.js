import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import products from './modules/products';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        userInfo: {
            email: 'bello96@163.com',
            userName: '邓佳贝'
        }
    },
    modules: {
        cart,
        products
    }
})