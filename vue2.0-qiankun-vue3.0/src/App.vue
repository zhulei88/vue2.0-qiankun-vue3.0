<template>
  <div id="app">
    <h1>这里是主应用</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!--需要与main.js配置的跳转路由一致-->
      <router-link to="/app-vue3">微应用</router-link>
    </nav>
    <router-view />
    <!--微应用在此展示-->
    <div id="container"></div>
  </div>
</template>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 10px solid #452322;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
