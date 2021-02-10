<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">我的</router-link> |
      <router-link to="/product">商品</router-link> |
      <router-link to="/cart">购物车</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
#nav {
  padding: 30px 30px 10px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>