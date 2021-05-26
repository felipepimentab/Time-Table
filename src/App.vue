<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@font-face {
  font-family: 'San Francisco';
  src: url(D:/Felipe/Documentos/Vue-TimeTable/time-table/src/assets/SF-Pro-Rounded-Bold.ttf);
}

html {
  font-family: 'Helvetica Nue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


  min-width: 100vw;
  min-height: 100vh;
  background-image: url(D:/Felipe/Documentos/Vue-TimeTable/time-table/src/assets/big-sur-dark.jpg);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}

#app {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  padding: 30px;
  display: none;
  a {
    font-weight: bold;
    color: #6f7f8f;

    &.router-link-exact-active {
      color: #7df7c0;
    }
  }
}
@media screen and (max-width: 1000px) {
}
</style>
