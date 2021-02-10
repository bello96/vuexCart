import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "./../components/ProductList.vue";
import ShoppingCart from "./../components/ShoppingCart.vue";
import Home from "./../components/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        rregister: '/home',
        component: Home
    },
    {
        path: "/product",
        name: "Product",
        component: ProductList
    },
    {
        path: "/cart",
        name: "Cart",
        component: ShoppingCart
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
